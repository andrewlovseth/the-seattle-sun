// map.js
//
// Initializes a MapLibre GL JS interactive map for each [data-map-canvas]
// element on the page. Reads POIs from a sibling <script type="application/json"
// data-map-pois> data island, clones a <template data-map-marker> per POI,
// and attaches it as a maplibregl.Marker. Bounds are auto-fit to all POIs.
//
// MapLibre is loaded as a UMD global (window.maplibregl) via a sibling
// <script> enqueue in functions/enqueue-styles-scripts.php — MapLibre 4.x does
// not ship a standalone ESM bundle, so we defer to the global.

const STYLE_URL = "https://tiles.openfreemap.org/styles/positron";

// Seattle city limits — the map is framed as a static "portrait" of the city,
// not an auto-fit to POI bounds. POIs get plotted wherever they fall inside
// this view. SW and NE corners [lng, lat].
const SEATTLE_BOUNDS = [
    [-122.460, 47.495],
    [-122.224, 47.735],
];

const FIT_PADDING = { top: 20, bottom: 20, left: 20, right: 20 };

// Warm print-paper palette matching The Seattle Sun's existing prod map
// illustration. We mutate the Positron style JSON in-memory so colors are
// baked in before the first tile paints — no FOUC of default Positron grays.
const PALETTE = {
    land:            "#F5E9DC", // warm cream — background + residential
    landBuilt:       "#F0E2D0", // slightly darker for built-up areas
    water:           "#C3E2E0", // pale aqua
    park:            "#DAE9BC", // pale sage
    wood:            "#CEDFAE", // slightly deeper sage for forests
    building:        "#EFE2CA",
    buildingOutline: "#DCCDAF",
    roadMajor:       "#BEC8D3", // cool blue-gray, dimmed via opacity below
    roadMinor:       "#BEC8D3", // same hue for residential streets
    roadCasing:      "#BEC8D3", // casings are hidden via opacity 0, color moot
};

// All symbol layers (city/place labels, water names, highway shields, road
// name text, icons) are hidden to match prod's static-illustration aesthetic
// — the POI markers and sidebar list carry all the text that belongs on the
// map. Done via `layer.type === "symbol"` check in recolorStyle(), not a
// hardcoded list, so it stays robust against upstream Positron changes.

export function setupMap() {
    document.addEventListener("DOMContentLoaded", function () {
        const canvases = document.querySelectorAll("[data-map-canvas]");
        if (!canvases.length) return;

        if (typeof window.maplibregl === "undefined") {
            console.warn("[map] maplibregl global not found — did the vendor script load?");
            return;
        }

        canvases.forEach(function (canvas) {
            initMap(canvas).catch(function (err) {
                console.error("[map] init failed", err);
            });
        });
    });
}

async function initMap(canvas) {
    const figure = canvas.closest(".map__figure-wrapper") || canvas.parentElement;
    if (!figure) return;

    const dataEl = figure.querySelector("[data-map-pois]");
    const template = figure.querySelector("[data-map-marker]");
    if (!dataEl || !template) return;

    let pois = [];
    try {
        pois = JSON.parse(dataEl.textContent || "[]");
    } catch (err) {
        console.warn("[map] failed to parse POI data island", err);
        pois = [];
    }

    // Fetch and recolor the style in-memory so warm Seattle Sun colors are
    // already baked in when the first tile paints. Falls back to the plain
    // URL (cooler default Positron) if the fetch or recolor fails.
    let style = STYLE_URL;
    try {
        const res = await fetch(STYLE_URL);
        if (!res.ok) throw new Error("style fetch " + res.status);
        const parsed = await res.json();
        recolorStyle(parsed);
        style = parsed;
    } catch (err) {
        console.warn("[map] using default Positron style — recolor failed", err);
    }

    const map = new window.maplibregl.Map({
        container: canvas,
        style: style,
        bounds: SEATTLE_BOUNDS,
        fitBoundsOptions: { padding: FIT_PADDING },
        interactive: false,
        attributionControl: false,
    });

    // Compact attribution satisfies OpenFreeMap / OpenMapTiles / OSM requirements
    // without dominating the print-paper aesthetic.
    map.addControl(
        new window.maplibregl.AttributionControl({ compact: true }),
        "bottom-right"
    );

    // The map view is fixed to Seattle city limits via the constructor's
    // `bounds` option — no POI-based auto-fit. Markers are simply plotted at
    // their coordinates within the fixed portrait.
    map.on("load", function () {
        pois.forEach(function (poi) {
            const el = buildMarkerElement(template, poi.headline);
            new window.maplibregl.Marker({ element: el, anchor: "center" })
                .setLngLat([poi.lng, poi.lat])
                .addTo(map);
        });
    });
}

// Mutate a parsed MapLibre style JSON in place, overriding key paint properties
// with our warm Seattle Sun palette. We only touch base surfaces (land, water,
// parks, roads, buildings) — label colors and the rest of Positron's hierarchy
// are preserved so the map still reads cleanly.
function recolorStyle(style) {
    if (!style || !Array.isArray(style.layers)) return;

    for (const layer of style.layers) {
        const id = layer.id;
        if (!id) continue;

        // Kill every label/icon layer in one sweep.
        if (layer.type === "symbol") {
            layer.layout = { ...(layer.layout || {}), visibility: "none" };
            continue;
        }

        // Spread existing paint so we keep other properties (antialias, opacity).
        const paint = layer.paint ? { ...layer.paint } : {};

        if (id === "background") {
            paint["background-color"] = PALETTE.land;
        } else if (id === "water") {
            paint["fill-color"] = PALETTE.water;
        } else if (id === "waterway") {
            paint["line-color"] = PALETTE.water;
        } else if (id === "park") {
            paint["fill-color"] = PALETTE.park;
        } else if (id === "landcover_wood") {
            paint["fill-color"] = PALETTE.wood;
        } else if (id === "landuse_residential") {
            paint["fill-color"] = PALETTE.landBuilt;
        } else if (id === "building") {
            paint["fill-color"] = PALETTE.building;
            paint["fill-outline-color"] = PALETTE.buildingOutline;
        } else if (/^highway_(motorway|major)(_bridge)?_inner$/.test(id)) {
            paint["line-color"] = PALETTE.roadMajor;
            paint["line-opacity"] = 0.7;
            // Flat widths since the map is locked at a single zoom level.
            // Motorways slightly thicker than majors so the hierarchy reads.
            paint["line-width"] = id.includes("motorway") ? 1.3 : 0.8;
        } else if (/^highway_(motorway|major)(_bridge)?_casing$/.test(id)) {
            paint["line-opacity"] = 0;
        } else if (id === "highway_minor") {
            paint["line-color"] = PALETTE.roadMinor;
            paint["line-opacity"] = 0.4;
            paint["line-width"] = 0.5;
        } else if (id === "highway_path") {
            paint["line-opacity"] = 0;
        } else if (id === "tunnel_motorway_inner") {
            paint["line-color"] = PALETTE.roadMajor;
            paint["line-opacity"] = 0.5;
            paint["line-width"] = 1.3;
        } else if (id === "tunnel_motorway_casing") {
            paint["line-opacity"] = 0;
        } else if (id === "aeroway-area") {
            paint["fill-color"] = PALETTE.roadMajor;
            paint["fill-opacity"] = 0.7;
        } else if (id === "aeroway-runway" || id === "aeroway-taxiway") {
            paint["line-color"] = PALETTE.roadMajor;
            paint["line-opacity"] = 0.7;
        } else if (id === "aeroway-runway-casing") {
            paint["line-opacity"] = 0;
        } else if (/^boundary_/.test(id)) {
            // Hide all admin boundaries — country, county, disputed. The dashed
            // county lines crossing Puget Sound were the most visible offender.
            paint["line-opacity"] = 0;
        } else {
            continue;
        }

        layer.paint = paint;
    }
}

function buildMarkerElement(template, headline) {
    // <template> content lives in a DocumentFragment — clone it, pull out the
    // .poi root, and fill the headline via textContent (never innerHTML) so
    // user-supplied strings can't inject markup.
    const fragment = template.content.cloneNode(true);
    const root = fragment.querySelector(".poi");
    if (!root) return document.createElement("div");

    const headlineEl = root.querySelector(".poi__headline");
    if (headlineEl) {
        headlineEl.textContent = headline || "";
    }

    // Accessibility: make markers focusable and labeled so the popover can open
    // on keyboard focus (mirrored in CSS with :focus-visible).
    root.setAttribute("tabindex", "0");
    root.setAttribute("role", "button");
    if (headline) {
        root.setAttribute("aria-label", headline);
    }

    return root;
}
