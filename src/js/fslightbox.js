!(function (t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var n = e();
        for (var o in n) ("object" == typeof exports ? exports : t)[o] = n[o];
    }
})(self, () =>
    (() => {
        "use strict";
        var t = {};
        ((t) => {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        })(t);
        var e,
            n = "fslightbox-",
            i = "".concat(n, "styles"),
            s = "".concat(n, "full-dimension"),
            r = "".concat(n, "flex-centered"),
            a = "".concat(n, "open"),
            c = "".concat(n, "absoluted"),
            u = "".concat(n, "opacity-1"),
            l = "".concat(n, "slide-btn"),
            d = "".concat(l, "-container"),
            h = "".concat(n, "fade-in"),
            f = "".concat(n, "fade-out"),
            p = h + "-strong",
            m = f + "-strong",
            b = ("".concat(n, "caption"), "".concat(n, "thumb")),
            g = b + "s",
            v = "".concat(g, "-loader"),
            x = "".concat(g, "-cursorer"),
            w = "".concat(g, "-inner"),
            y = b + "-wrapper",
            C = b + "-invalid";
        function L(t) {
            return (
                (L =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t &&
                                  "function" == typeof Symbol &&
                                  t.constructor === Symbol &&
                                  t !== Symbol.prototype
                                  ? "symbol"
                                  : typeof t;
                          }),
                L(t)
            );
        }
        function T(t) {
            var e = t.c,
                n = t.componentsServices,
                o = t.core.thumbsRenderDispatcher,
                i = t.data,
                s = t.ea,
                r = t.la,
                a = (t.stageIndexes, t.ui),
                c = t.z;
            function u() {
                for (var t = 0; t < e; t++) r.t(t);
            }
            (this.o = function () {
                c.r(),
                    (i.isThumbing = !0),
                    s.uc(),
                    a.sthc(),
                    u(),
                    o.renderThumbsIfNotYetAndAllTypesDetected(),
                    i.unloadedThumbsCount && n.appendThumbsLoaderIfNotYet();
            }),
                (this.x = function () {
                    c.r(), (i.isThumbing = !1), s.dc(), a.htsc(), u();
                });
        }
        function z(t, e) {
            var n = t.classList;
            n.contains(e) && n.remove(e);
        }
        function S(t, e) {
            var n = t.classList;
            n.contains(e) || n.add(e);
        }
        function A(t) {
            var e = t.data,
                n = t.elements,
                o = t.stageIndexes;
            (this.runActions = function () {
                z(n.thumbsContainer, r);
                var t = innerWidth / 2,
                    s = n.thumbsWrappers[o.current],
                    a = s.offsetLeft + s.offsetWidth / 2,
                    c = e.thumbsInnerWidth - a;
                a > t && c > t ? i(t - a) : a > t ? i(innerWidth - e.thumbsInnerWidth - 9) : c > t && i(0);
            }),
                (this.runToThinThumbsActions = function () {
                    S(n.thumbsContainer, r), i(0);
                });
            var i = function (t) {
                (e.thumbsTransform = t), (n.thumbsInner.style.transform = "translateX(".concat(t, "px)"));
            };
        }
        function I(t) {
            var e = this,
                n = t.core,
                o = n.eventsDispatcher,
                i = n.globalEventsController,
                s = n.scrollbarRecompensor,
                r = t.data,
                c = t.elements,
                u = t.fs,
                l = t.p,
                d = t.props,
                h = t.qs,
                f = t.ss,
                p = t.t,
                b = t.thumbsSwipingProps,
                g = t.z;
            (this.isLightboxFadingOut = !1),
                (this.runActions = function () {
                    (e.isLightboxFadingOut = !0),
                        c.container.classList.add(m),
                        i.removeListeners(),
                        f.r(),
                        d.exitFullscreenOnClose && r.ifs && u.x(),
                        g.r(),
                        p(function () {
                            e.isLightboxFadingOut = !1;
                            for (var n = 0; n < t.ts.length; n++) clearTimeout(t.ts[n]);
                            for (t.ts = [], n = 0; n < h.length; n++) h[n] = 0;
                            (l.i = !1),
                                b && (b.i = !1),
                                c.container.classList.remove(m),
                                document.documentElement.classList.remove(a),
                                s.removeRecompense(),
                                document.body.removeChild(c.container),
                                o.dispatch("onClose");
                        }, 270);
                });
        }
        function E(t, e, n, o) {
            var i = t.isl,
                s = t.props.slideChangeAnimation,
                r = t.saw,
                a = t.smw,
                c = t.st,
                u = t.stageIndexes,
                l = t.sws,
                d = e.previous,
                h = e.current,
                p = e.next;
            function m() {
                c.i(h) ? (h === u.previous ? a[h].ne() : h === u.next && a[h].p()) : (a[h].h(), a[h].n());
            }
            function b(t, e, n) {
                t && r[e].classList.add(n);
            }
            this.runJumpReflowedActions = function () {
                b(n, h, f),
                    b(o, u.current, s),
                    l.a(),
                    void 0 !== u.previous && u.previous !== h && a[u.previous].ne(),
                    a[u.current].n(),
                    void 0 !== u.next && u.next !== h && a[u.next].p(),
                    l.b(d),
                    l.b(p),
                    i[h] ? setTimeout(m, 260) : m();
            };
        }
        function F(t) {
            var e,
                n = t.core.slideChangeFacade,
                o = t.props,
                i = t.ss,
                s = t.stageIndexes,
                r = !1;
            function a() {
                (r = !1), clearTimeout(e), t.ssb.classList.remove(u), t.ssx();
            }
            function c() {
                var i = t.ssb;
                (i.style.transition = "opacity .2s"),
                    (i.style.width = "0px"),
                    i.offsetWidth,
                    (i.style.transition = "opacity .2s, width linear ".concat(o.slideshowTime, "ms")),
                    (i.style.width = innerWidth + "px"),
                    (e = setTimeout(function () {
                        n.changeToNext(), o.disableSlideshowLoop && s.current + 1 === o.sources.length ? a() : c();
                    }, o.slideshowTime));
            }
            (i.t = function () {
                r ? a() : ((r = !0), t.sss(), t.ssb.classList.add(u), c());
            }),
                (i.r = function () {
                    r && a();
                });
        }
        function N(t) {
            var e = t.p,
                n = Object.keys(e),
                o = e[n[0]],
                i = e[n[1]];
            return Math.hypot(o.screenX - i.screenX, o.screenY - i.screenY);
        }
        function k(t) {
            t.componentsServices;
            var e = t.core.pointeringBucket,
                n = t.elements,
                o = t.p,
                i = t.smw,
                s = t.stageIndexes,
                r = t.z,
                a = t.zv;
            function c(t, e) {
                i[t].v(o.swipedX)[e]();
            }
            (this.a = function (i) {
                e.runSwipingMoveActionsForPropsAndEvent(o, i),
                    n.container.contains(t.h) || n.container.appendChild(t.h);
            }),
                (this.p = function () {
                    var t = N(o);
                    if (o.pinchedHypot) {
                        var e = t - o.pinchedHypot,
                            n = a + (e / Math.hypot(innerWidth, innerHeight)) * 10;
                        n < 0.9 && (n = 0.9), r.z(n), (o.pinchedHypot = t);
                    } else o.pinchedHypot = t;
                }),
                (this.s = function () {
                    c(s.current, "z"),
                        void 0 !== s.previous && o.swipedX > 0
                            ? c(s.previous, "ne")
                            : void 0 !== s.next && o.swipedX < 0 && c(s.next, "p");
                }),
                (this.zs = function (t) {
                    (o.swipedX = (t.screenX - o.downScreenX) / a),
                        (o.swipedY = (t.screenY - o.downScreenY) / a),
                        i[s.current].v(o.ux + o.swipedX, o.uy + o.swipedY).z();
                });
        }
        function B(t, e) {
            var n = t.c,
                o = t.dss,
                i = t.p,
                s = t.r,
                r = t.zv,
                a = s(k);
            if (i.isPinching) return a.a(e), void a.p();
            2 !== i.pc && (1 === r ? (1 === n || o ? (i.swipedX = 1) : (a.a(e), a.s())) : (a.a(e), a.zs(e)));
        }
        function W(t) {
            var e = t.core,
                n = e.clickZoomer,
                o = e.slideIndexChanger,
                i = t.p,
                s = t.smw,
                r = t.stageIndexes,
                a = t.sws,
                c = t.zv;
            function u(t) {
                var e = s[r.current];
                e.a(), e[t]();
            }
            function l(t, e) {
                void 0 !== t && (s[t].s(), s[t][e]());
            }
            (this.p = function () {
                var t = r.previous;
                if (void 0 === t) u("z");
                else {
                    u("p");
                    var e = r.next;
                    o.changeTo(t);
                    var n = r.previous;
                    a.d(n), a.b(e), u("z"), l(n, "ne");
                }
            }),
                (this.n = function () {
                    var t = r.next;
                    if (void 0 === t) u("z");
                    else {
                        u("ne");
                        var e = r.previous;
                        o.changeTo(t);
                        var n = r.next;
                        a.d(n), a.b(e), u("z"), l(n, "p");
                    }
                }),
                (this.s = function () {
                    var t = s[r.current];
                    (i.ux = t.gx()), (i.uy = t.gy());
                }),
                (this.d = function () {
                    c <= 1 ? n.zoomIn() : n.zoomOut();
                });
        }
        function M(t, e) {
            t.contains(e) && t.removeChild(e);
        }
        function H(t) {
            t.componentsServices;
            var e = t.core,
                n = e.lightboxCloser,
                o = e.pointeringBucket,
                i = t.dss,
                s = t.elements,
                r = t.p,
                a = t.props.disableBackgroundClose,
                c = t.r,
                u = t.swc,
                l = (t.ui, t.zv),
                d = c(W);
            (this.a = function () {
                M(s.container, t.h),
                    (r.isPinching = !1),
                    (r.pinchedHypot = 0),
                    o.runSwipingTopActionsForPropsAndEvent(r),
                    u.classList.remove("fslightboxswcp");
            }),
                (this.s = function () {
                    1 === l ? i || (r.swipedX > 0 ? d.p() : d.n()) : d.s();
                }),
                (this.n = function (t) {
                    "VIDEO" !== t.target.tagName && (r.sd ? d.d() : a || n.close());
                });
        }
        function D(t, e) {
            var n = t.p;
            n.p[e.pointerId] = { screenX: e.screenX, screenY: e.screenY };
            var o = Object.keys(n.p).length;
            return (n.pc = o), o <= 2;
        }
        function O(t) {
            var e = t.core.pointeringBucket,
                n = t.data,
                o = t.elements,
                i = t.thumbsSwipingProps;
            this.runActions = function (t) {
                e.runSwipingMoveActionsForPropsAndEvent(i, t),
                    (o.thumbsInner.style.transform = "translateX(".concat(n.thumbsTransform + i.swipedX, "px)")),
                    o.thumbsContainer.contains(o.thumbsCursorer) || o.thumbsContainer.appendChild(o.thumbsCursorer);
            };
        }
        function P(t) {
            var e = t.data,
                n = t.resolve,
                o = t.thumbsSwipingProps,
                i = n(O),
                s = window.innerWidth;
            this.listener = function (t) {
                e.thumbsInnerWidth > s && o.i && i.runActions(t);
            };
        }
        function R(t) {
            var e = t.data,
                n = t.core,
                o = n.slideIndexChanger,
                i = n.thumbsTransformTransitioner,
                s = n.pointeringBucket,
                r = t.elements,
                a = t.thumbsSwipingProps,
                c = r.thumbsWrappers;
            (this.runNoSwipeActionsForEvent = function (t) {
                M(r.thumbsContainer, r.thumbsCursorer), (a.i = !1);
                for (var e = 0; e < c.length; e++) if (c[e] && c[e].contains(t.target)) return void o.jumpTo(e);
            }),
                (this.runActions = function () {
                    if (
                        (M(r.thumbsContainer, r.thumbsCursorer),
                        (e.thumbsTransform += a.swipedX),
                        s.runSwipingTopActionsForPropsAndEvent(a),
                        e.thumbsTransform > 0)
                    )
                        return u(0);
                    e.thumbsTransform < innerWidth - e.thumbsInnerWidth - 9 && u(innerWidth - e.thumbsInnerWidth - 9);
                });
            var u = function (t) {
                (e.thumbsTransform = t),
                    i.callActionWithTransition(function () {
                        r.thumbsInner.style.transform = "translateX(".concat(t, "px)");
                    });
            };
        }
        function q(t) {
            var e = t.resolve,
                n = t.thumbsSwipingProps,
                o = e(R);
            this.listener = function (t) {
                n.i && (n.swipedX ? o.runActions() : o.runNoSwipeActionsForEvent(t));
            };
        }
        function X(t) {
            var e = t.m,
                n = t.props,
                o = t.r,
                i = t.ui,
                s = o(q),
                r = o(P),
                a = (function () {
                    var t = !1;
                    return function () {
                        return (
                            !t &&
                            ((t = !0),
                            requestAnimationFrame(function () {
                                t = !1;
                            }),
                            !0)
                        );
                    };
                })();
            (this.m = function (o) {
                i.qps(), t.p.i && e(B, D)(o), n.disableThumbs || r.listener(o);
            }),
                (this.u = function (e) {
                    !(function (t, e) {
                        var n = t.p,
                            o = t.r,
                            i = t.z,
                            s = t.zv,
                            r = o(H);
                        (n.p = {}),
                            n.i && (n.isPinching || (n.swipedX ? r.s() : r.n(e)), r.a(), s < 1 && (i.z(1), i.e()));
                    })(t, e),
                        n.disableThumbs || s.listener(e),
                        i.qps();
                }),
                (this.w = function (e) {
                    t.p.i ||
                        (i.qps(),
                        a() &&
                            (function (t, e) {
                                var n = t.z,
                                    o = t.zv;
                                if (1 === o) {
                                    if (e.deltaY > 0) return;
                                    n.b();
                                }
                                var i = 0.1 * o,
                                    s = o;
                                e.deltaY < 0 ? (s += i) : (s -= i) < 1 && (s = 1), n.z(s), 1 === s && n.e();
                            })(t, e));
                });
        }
        function Y(t, e) {
            var n = t.core,
                i = n.clickZoomer,
                s = n.lightboxCloser,
                r = n.slideChangeFacade,
                a = n.thumbsToggler,
                c = t.fs,
                u = (t.middleware, t.props),
                l = t.ss;
            if ((t.ui.qps(), "Space" !== e.code))
                switch (e.key) {
                    case "Escape":
                        s.close();
                        break;
                    case "ArrowLeft":
                        r.changeToPrevious();
                        break;
                    case "ArrowRight":
                        r.changeToNext();
                        break;
                    case "t":
                        u.disableThumbs || a.toggleThumbs();
                        break;
                    case "+":
                        o.p.i || i.zoomIn();
                        break;
                    case "-":
                        o.p.i || i.zoomOut();
                        break;
                    case "F11":
                        e.preventDefault(), c.t();
                }
            else l.t();
        }
        function j(t, e, o, i, s) {
            var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            r.setAttributeNS(null, "width", e),
                r.setAttributeNS(null, "height", e),
                r.setAttributeNS(null, "viewBox", i);
            var a = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return (
                a.setAttributeNS(null, "class", "".concat(n, "svg-path")),
                a.setAttributeNS(null, "d", s),
                r.appendChild(a),
                t.appendChild(r),
                r
            );
        }
        function V(t, e) {
            var o = document.createElement("div");
            return (o.className = "".concat(n, "toolbar-button ").concat(r)), (o.title = e), t.appendChild(o), o;
        }
        function U(t, e, n) {
            var o = V(t, e.title);
            (o.onclick = n), j(o, e.width, e.height, e.viewBox, e.d);
        }
        function Z(t) {
            var e = t.props.sources,
                o = t.elements,
                i = document.createElement("div");
            (o.nav = i),
                (i.className = "".concat(n, "nav")),
                o.container.appendChild(i),
                (function (t, e) {
                    var o = t.core,
                        i = o.clickZoomer,
                        s = i.zoomIn,
                        r = i.zoomOut,
                        a = o.lightboxCloser.close,
                        c = o.thumbsToggler,
                        u = t.props,
                        l = u.customToolbarButtons,
                        d = u.disableThumbs,
                        h = u.toolbarButtons,
                        f = document.createElement("div");
                    (f.className = "".concat(n, "toolbar")), e.appendChild(f);
                    for (
                        var p = function (e) {
                                U(f, l[e], function () {
                                    return l[e].onClick(t);
                                });
                            },
                            m = 0;
                        m < l.length;
                        m++
                    )
                        p(m);
                    d || U(f, h.thumbs, c.toggleThumbs),
                        U(f, h.zoomIn, s),
                        U(f, h.zoomOut, r),
                        (function (t, e) {
                            var n = t.props.toolbarButtons.slideshow,
                                o = n.start,
                                i = n.pause,
                                s = t.ss,
                                r = V(e, o.title);
                            r.onclick = s.t;
                            var a = j(r, o.width, o.height, o.viewBox, o.d);
                            function c(t) {
                                (r.title = t.title),
                                    a.setAttributeNS(null, "width", t.width),
                                    a.setAttributeNS(null, "height", t.height),
                                    a.setAttributeNS(null, "viewBox", t.viewBox),
                                    a.firstChild.setAttributeNS(null, "d", t.d);
                            }
                            (t.sss = function () {
                                c(i);
                            }),
                                (t.ssx = function () {
                                    c(o);
                                });
                        })(t, f),
                        (function (t, e) {
                            var n = t.componentsServices,
                                o = t.data,
                                i = t.fs,
                                s = t.props.toolbarButtons.fullscreen,
                                r = s.enter,
                                a = s.exit,
                                c = V(e, r.title),
                                u = j(c, r.width, r.height, r.viewBox, r.d);
                            function l(t) {
                                (c.title = t.title),
                                    u.setAttributeNS(null, "width", t.width),
                                    u.setAttributeNS(null, "height", t.height),
                                    u.setAttributeNS(null, "viewBox", t.viewBox),
                                    u.firstChild.setAttributeNS(null, "d", t.d);
                            }
                            (n.ofs = function () {
                                (o.ifs = !0), l(a);
                            }),
                                (n.xfs = function () {
                                    (o.ifs = !1), l(r);
                                }),
                                (c.onclick = i.t);
                        })(t, f),
                        U(f, h.close, a);
                })(t, i),
                e.length > 1 &&
                    (function (t, e) {
                        var o = t.componentsServices,
                            i = t.props.sources,
                            s = document.createElement("div");
                        s.className = "".concat(n, "slide-number-container");
                        var a = document.createElement("div");
                        a.className = r;
                        var c = document.createElement("span");
                        o.setSlideNumber = function (t) {
                            return (c.innerHTML = t);
                        };
                        var u = document.createElement("span");
                        u.className = "".concat(n, "slash");
                        var l = document.createElement("div");
                        (l.innerHTML = i.length),
                            s.appendChild(a),
                            a.appendChild(c),
                            a.appendChild(u),
                            a.appendChild(l),
                            e.appendChild(s),
                            setTimeout(function () {
                                a.offsetWidth > 55 && (s.style.justifyContent = "flex-start");
                            });
                    })(t, i);
        }
        function _(t, e) {
            var n = t.c,
                o = t.core.pointeringBucket,
                i = t.elements.sources,
                s = t.p,
                r = t.smw,
                a = t.stageIndexes,
                c = t.swc,
                u = t.z,
                l = t.zv;
            if (
                ("touch" !== e.pointerType && "IMG" === e.target.tagName && e.preventDefault(),
                o.runSwipingDownActionsForPropsAndEvent(s, e),
                (s.downScreenY = e.screenY),
                2 === s.pc)
            )
                (s.isPinching = !0), (s.pinchedHypot = N(s)), c.classList.add("fslightboxswcp"), 1 === l && u.b();
            else for (var d = 0; d < n; d++) r[d].d();
            var h = i[a.current];
            s.sd = h && h.contains(e.target);
        }
        function J(t) {
            var e = "fslightbox-loader",
                n = document.createElement("div");
            n.className = e;
            for (var o = 0; o < 3; o++) {
                var i = document.createElement("div");
                (i.className = "".concat(e, "-child")), n.appendChild(i);
            }
            return t.appendChild(n), n;
        }
        function G(t, e) {
            var n = t.smw,
                o = t.st,
                i = t.swc,
                a = document.createElement("div"),
                u = "".concat(c, " ").concat(s, " ").concat(r),
                l = 0,
                d = 0,
                h = 0;
            function f(t) {
                (l = t + d), (a.style.transform = "translate(".concat(l, "px,").concat(h, "px)")), (d = 0);
            }
            function p() {
                return (1 + t.props.slideDistance) * innerWidth;
            }
            (a.className = u),
                (a.s = function () {
                    a.style.display = "flex";
                }),
                (a.h = function () {
                    a.style.display = "none";
                }),
                (a.a = function () {
                    a.classList.add("fslightboxtt");
                }),
                (a.d = function () {
                    a.classList.remove("fslightboxtt");
                }),
                (a.n = function () {
                    a.style.removeProperty("transform");
                }),
                (a.v = function (t, e) {
                    return (d = t), void 0 !== e && (h = e), a;
                }),
                (a.gx = function () {
                    return l;
                }),
                (a.gy = function () {
                    return h;
                }),
                (a.ne = function () {
                    f(-p());
                }),
                (a.z = function () {
                    f(0);
                }),
                (a.p = function () {
                    f(p());
                }),
                i.appendChild(a),
                o.i(e) || a.h(),
                (n[e] = a),
                (function (t, e) {
                    var n = t.smw,
                        o = t.sew,
                        i = document.createElement("div");
                    n[e].appendChild(i),
                        (o[e] = i),
                        (function (t, e) {
                            var n = t.saw,
                                o = t.sew,
                                i = document.createElement("div");
                            J(i), o[e].appendChild(i), (n[e] = i);
                        })(t, e);
                })(t, e);
        }
        function $(t) {
            var e = t.c,
                n = t.elements,
                o = t.m,
                i = document.createElement("div");
            (i.className = "fslightboxswc ".concat(c, " ").concat(s)),
                n.container.appendChild(i),
                i.addEventListener("pointerdown", o(_, D)),
                (t.swc = i);
            for (var r = 0; r < e; r++) G(t, r);
        }
        function K(t, e) {
            var n = t.data.isThumbing,
                o = t.elements,
                i = o.captions,
                s = o.container,
                a = t.props.captions,
                c = t.stageIndexes.current,
                u = t.tc,
                l = document.createElement("div"),
                d = document.createElement("div"),
                h = "fslightboxc ".concat(r);
            (c !== e || (n && !u)) && (h += " fslightboxx"),
                (l.className = h),
                (d.className = "fslightboxci"),
                (d.innerHTML = a[e]),
                l.appendChild(d),
                (i[e] = l),
                s.appendChild(l);
        }
        function Q(t, e) {
            var n = t.core.slideChangeFacade,
                o = t.elements,
                i = t.props.slideButtons,
                s = e.charAt(0).toUpperCase() + e.slice(1),
                a = "slideButton".concat(s),
                c = i[e];
            (o[a] = document.createElement("div")),
                (o[a].className = "".concat(d, " ").concat(d, "-").concat(e)),
                (o[a].title = c.title),
                (o[a].onclick = n["changeTo".concat(s)]),
                (function (t, e) {
                    var n = document.createElement("div");
                    (n.className = "".concat(l, " ").concat(r)),
                        j(n, e.width, e.height, e.viewBox, e.d),
                        t.appendChild(n);
                })(o[a], c),
                o.container.appendChild(o[a]);
        }
        "object" === ("undefined" == typeof document ? "undefined" : L(document)) &&
            (((e = document.createElement("style")).className = i),
            e.appendChild(
                document.createTextNode(
                    ".fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong forwards .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-absoluted{position:absolute;top:0;left:0}.fslightboxcg{cursor:grabbing!important}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightboxx{opacity:0!important;z-index:-1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightboxtt{transition:transform .3s!important}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:none;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#d1d2d2}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader-child{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader-child:nth-child(1){animation-delay:-.45s}.fslightbox-loader-child:nth-child(2){animation-delay:-.3s}.fslightbox-loader-child:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-thumbs-loader{width:54px!important;height:54px!important}.fslightbox-thumbs-loader div{border-width:4px!important;width:44px!important;height:44px!important}.fslightbox-nav{height:45px;width:100%;transition:opacity .3s}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:2;right:0;top:0;height:45px;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:2;transform:translateY(-50%);transition:opacity .3s}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightboxh{z-index:3}.fslightboxss{width:0;height:2px;z-index:3;opacity:0;background:#fff}.fslightboxin{font-size:24px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightboxyt{border:0}.fslightboxs{position:relative;z-index:3;display:block;opacity:0;margin:auto;cursor:zoom-in}.fslightboxswc{z-index:1;transition:transform .2s linear}.fslightboxswcp{transition:none!important}.fslightbox-thumbs{position:absolute;bottom:0;left:0;width:100%;z-index:2;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%);transition:opacity .2s;padding:10px 5px 12px 5px;height:114px}@media (min-width:992px){.fslightbox-thumbs{padding-top:13px;height:120px}}@media (min-width:1600px){.fslightbox-thumbs{padding:14px 0;height:126px}}.fslightbox-thumbs-inner{display:inline-flex;justify-content:flex-start;align-items:center;height:100%}.fslightbox-thumb-wrapper{position:relative;height:100%;margin:0 4px;opacity:0;transition:opacity .3s}.fslightbox-thumb-wrapper svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer;z-index:1}.fslightbox-thumb-wrapper path{fill:#fff}.fslightboxtd{position:absolute;top:2px;left:2px;width:calc(100% - 4px);height:calc(100% - 4px);background:rgba(0,0,0,.4);cursor:pointer}.fslightbox-thumb{cursor:pointer;border-radius:1px;height:100%;width:auto!important;border:2px solid transparent;max-width:unset;max-height:unset}.fslightboxta{border:2px solid #fff!important}.fslightbox-thumb-invalid{background:linear-gradient(to bottom,#0f0f0f,rgba(15,15,15,.5));display:inline-block;min-width:155px}.fslightbox-thumbs-cursorer{z-index:3;cursor:grabbing}.fslightboxc{position:absolute;bottom:0;left:50%;width:100%;transform:translateX(-50%);transition:opacity .2s,transform .3s;z-index:2;user-select:text}.fslightboxc:after{content:'';position:absolute;z-index:-1;top:0;left:0;opacity:1;transition:opacity 1s;width:100%;height:100%;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%)}.fslightboxci{padding:20px 25px 30px 25px;max-width:1200px;color:#eee;text-align:center;font-size:14px}.fslightboxct{transform:translate(-50%,-88px)}.fslightboxct:after{opacity:0;transition:none}@media(min-width:992px){.fslightboxct{transform:translate(-50%,-93px)}}"
                )
            ),
            document.head.appendChild(e));
        var tt = "fslightbox-types";
        function et(t) {
            var e,
                n = t.props,
                o = 0,
                i = {};
            (this.getSourceTypeFromLocalStorageByUrl = function (t) {
                return e[t] ? e[t] : s(t);
            }),
                (this.handleReceivedSourceTypeForUrl = function (t, n) {
                    if (!1 === i[n] && (o--, "invalid" !== t ? (i[n] = t) : delete i[n], 0 === o)) {
                        !(function (t, e) {
                            for (var n in e) t[n] = e[n];
                        })(e, i);
                        try {
                            localStorage.setItem(tt, JSON.stringify(e));
                        } catch (t) {}
                    }
                });
            var s = function (t) {
                o++, (i[t] = !1);
            };
            if (n.disableLocalStorage)
                (this.getSourceTypeFromLocalStorageByUrl = function () {}),
                    (this.handleReceivedSourceTypeForUrl = function () {});
            else {
                try {
                    e = JSON.parse(localStorage.getItem(tt));
                } catch (t) {}
                e || ((e = {}), (this.getSourceTypeFromLocalStorageByUrl = s));
            }
        }
        var nt = "image",
            ot = "video",
            it = "youtube",
            st = "custom",
            rt = "invalid";
        function at(t, e, n, o) {
            var i = this,
                s = (t.data, t.elements.sources),
                r = n / o,
                a = 0,
                c = null;
            (this.s = function () {
                var t = s[e].style;
                (c = i.g()), (t.width = "".concat(c[0], "px")), (t.height = "".concat(c[1], "px"));
            }),
                (this.g = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t.mh,
                        i = t.mw;
                    return (a = i / r) < e ? (n < i && (a = o), [a * r, a]) : [(a = o > e ? e : o) * r, a];
                }),
                (this.d = function () {
                    return c;
                });
        }
        function ct(t, e) {
            var n = this,
                o = t.elements.sources,
                i = t.isl,
                s = t.la,
                r = t.props.initialAnimation,
                a = t.resolve,
                c = t.saw,
                l = t.sew,
                d = t.sz;
            function h(t, n) {
                (d[e] = a(at, [e, t, n])), d[e].s();
            }
            this.a = function (t, a) {
                (i[e] = !0),
                    o[e].classList.add(u),
                    c[e].classList.add(r),
                    c[e].removeChild(c[e].firstChild),
                    requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            l[e].classList.add("fslightboxtt");
                        });
                    }),
                    h(t, a),
                    s.s(e),
                    s.t(e),
                    (n.a = h);
            };
        }
        function ut(t, e) {
            var n,
                o = this,
                i = t.elements.sources,
                s = t.props,
                r = (0, t.resolve)(ct, [e]);
            (this.handleImageLoad = function (t) {
                var e = t.target,
                    n = e.naturalWidth,
                    o = e.naturalHeight;
                r.a(n, o);
            }),
                (this.handleVideoLoad = function (t) {
                    var e = t.target,
                        o = e.videoWidth,
                        i = e.videoHeight;
                    (n = !0), r.a(o, i);
                }),
                (this.handleNotMetaDatedVideoLoad = function () {
                    n || o.handleYoutubeLoad();
                }),
                (this.handleYoutubeLoad = function () {
                    var t = 1920,
                        e = 1080;
                    s.maxYoutubeDimensions && ((t = s.maxYoutubeDimensions.width), (e = s.maxYoutubeDimensions.height)),
                        r.a(t, e);
                }),
                (this.handleCustomLoad = function () {
                    var t = i[e];
                    t.offsetWidth && t.offsetHeight
                        ? r.a(t.offsetWidth, t.offsetHeight)
                        : setTimeout(o.handleCustomLoad);
                });
        }
        function lt(t, e) {
            var n = t.elements.sources,
                o = t.props.customAttributes,
                i = n[e];
            for (var s in o[e]) {
                var r = o[e][s];
                "class" !== s ? i.setAttribute(s, r) : (i.className += " " + r);
            }
        }
        function dt(t, e) {
            var n = t.collections.sourceLoadHandlers,
                o = t.elements.sources,
                i = t.props.sources,
                s = t.saw,
                r = document.createElement("img");
            (o[e] = r),
                (r.className = "fslightboxs"),
                (r.src = i[e]),
                (r.onload = n[e].handleImageLoad),
                lt(t, e),
                s[e].appendChild(r);
        }
        function ht(t, e) {
            var n = t.collections.sourceLoadHandlers,
                o = t.elements.sources,
                i = t.props.sources,
                s = t.saw,
                r = document.createElement("video"),
                a = document.createElement("source");
            (o[e] = r),
                (r.className = "fslightboxs"),
                (r.src = i[e]),
                (r.onloadedmetadata = function (t) {
                    n[e].handleVideoLoad(t);
                }),
                (r.controls = !0),
                lt(t, e),
                r.appendChild(a),
                setTimeout(n[e].handleNotMetaDatedVideoLoad, 3e3),
                s[e].appendChild(r);
        }
        function ft(t, e) {
            var n = t.collections.sourceLoadHandlers,
                o = t.elements,
                i = o.sources,
                s = o.saw,
                r = t.props.sources,
                a = ((s = t.saw), document.createElement("iframe")),
                c = r[e],
                u = c.split("?")[1];
            (i[e] = a),
                (a.className = "fslightboxs fslightboxyt"),
                (a.src = "https://www.youtube.com/embed/"
                    .concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?")
                    .concat(u || "")),
                (a.allowFullscreen = !0),
                lt(t, e),
                s[e].appendChild(a),
                n[e].handleYoutubeLoad();
        }
        function pt(t, e) {
            var n = t.collections.sourceLoadHandlers,
                o = t.elements.sources,
                i = t.props.sources,
                s = t.saw,
                r = i[e];
            (o[e] = r), r.classList.add("fslightboxs"), lt(t, e), s[e].appendChild(r), n[e].handleCustomLoad();
        }
        function mt(t, e) {
            t.data.isSourceLoaded;
            var n,
                o,
                i = t.elements.sources,
                s = t.props,
                a = s.initialAnimation;
            return (
                s.sources,
                (n = t.saw),
                (o = document.createElement("div")),
                (n = n[e]),
                (o.className = "fslightboxin ".concat(r)),
                (o.innerHTML = "Invalid source"),
                n.removeChild(n.firstChild),
                (i[e] = o),
                n.classList.add(a),
                void n.appendChild(o)
            );
        }
        function bt(t, e, n) {
            var o = t.props.thumbsIcons;
            if (o[n]) {
                e.appendChild(o[n].cloneNode(!0));
                var i = document.createElement("div");
                (i.className = "fslightboxtd"), e.appendChild(i);
            }
        }
        function gt(t, e, n) {
            var o = t.elements,
                i = o.thumbsWrappers,
                s = o.thumbsInner;
            (i[e] = document.createElement("div")),
                (i[e].className = y),
                bt(t, i[e], e),
                (function (t, e, n, o) {
                    var i = t.core.thumbLoadHandler.handleLoad,
                        s = t.elements.thumbs,
                        r = t.stageIndexes.current;
                    (s[n] = document.createElement("img")), (s[n].src = o);
                    var a = b;
                    r === n && (a += " fslightboxta"), (s[n].className = a), (s[n].onload = i), e.appendChild(s[n]);
                })(t, i[e], e, n),
                s.appendChild(i[e]);
        }
        function vt(t) {
            var e = t.core.thumbsRenderDispatcher,
                n = t.data,
                o = t.props,
                i = o.showThumbsOnMount,
                s = o.sources,
                a = o.thumbs;
            this.buildThumbForTypeAndIndex = function (o, c) {
                var u;
                (u = a[c]
                    ? function () {
                          return gt(t, c, a[c]);
                      }
                    : o === nt
                    ? function () {
                          return gt(t, c, s[c]);
                      }
                    : function () {
                          return (function (t, e) {
                              var n = t.elements,
                                  o = n.thumbsWrappers,
                                  i = n.thumbsInner;
                              (o[e] = document.createElement("div")),
                                  (o[e].className = "".concat(C, " ").concat(y)),
                                  bt(t, o[e], e),
                                  (function (t, e, n) {
                                      var o = t.core.thumbLoadHandler.handleLoad,
                                          i = t.elements.thumbs,
                                          s = t.stageIndexes.current;
                                      i[n] = document.createElement("div");
                                      var a = "".concat(b, " ").concat(r);
                                      s === n && (a += " fslightboxta"),
                                          (i[n].className = a),
                                          j(
                                              i[n],
                                              "22px",
                                              0,
                                              "0 0 30 30",
                                              "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.212,8l-0.2,9h-2.024l-0.2-9 H16.212z M15.003,22.189c-0.828,0-1.323-0.441-1.323-1.182c0-0.755,0.494-1.196,1.323-1.196c0.822,0,1.316,0.441,1.316,1.196 C16.319,21.748,15.825,22.189,15.003,22.189z"
                                          ),
                                          e.appendChild(i[n]),
                                          setTimeout(o);
                                  })(t, o[e], e),
                                  i.appendChild(o[e]);
                          })(t, c);
                      }),
                    e.addFunctionToToBeRenderedAtIndex(u, c),
                    (i || n.isThumbing) && e.renderThumbsIfNotYetAndAllTypesDetected();
            };
        }
        function xt(t) {
            var e,
                n = t.collections,
                o = n.sourceLoadHandlers,
                i = n.sourcesRenderFunctions,
                s = t.core.sourceDisplayFacade,
                r = t.props.disableThumbs,
                a = t.resolve;
            r || (e = a(vt)),
                (this.runActionsForSourceTypeAndIndex = function (n, c) {
                    var u;
                    switch ((n !== rt && (o[c] = a(ut, [c])), n)) {
                        case nt:
                            u = dt;
                            break;
                        case ot:
                            u = ht;
                            break;
                        case it:
                            u = ft;
                            break;
                        case st:
                            u = pt;
                            break;
                        default:
                            u = mt;
                    }
                    (i[c] = function () {
                        return u(t, c);
                    }),
                        s.displaySourcesWhichShouldBeDisplayed(),
                        r || e.buildThumbForTypeAndIndex(n, c);
                });
        }
        function wt(t, e, n) {
            var o = t.props,
                i = o.types,
                s = o.type,
                r = o.sources;
            (this.getTypeSetByClientForIndex = function (t) {
                var e;
                return i && i[t] ? (e = i[t]) : s && (e = s), e;
            }),
                (this.retrieveTypeWithXhrForIndex = function (t) {
                    !(function (t, e) {
                        var n = document.createElement("a");
                        n.href = t;
                        var o = n.hostname;
                        if ("www.youtube.com" === o || "youtu.be" === o) return e(it);
                        var i = new XMLHttpRequest();
                        (i.onreadystatechange = function () {
                            if (4 !== i.readyState) {
                                if (2 === i.readyState) {
                                    var t,
                                        n = i.getResponseHeader("content-type");
                                    switch (n.slice(0, n.indexOf("/"))) {
                                        case "image":
                                            t = nt;
                                            break;
                                        case "video":
                                            t = ot;
                                            break;
                                        default:
                                            t = rt;
                                    }
                                    (i.onreadystatechange = null), i.abort(), e(t);
                                }
                            } else e(rt);
                        }),
                            i.open("GET", t),
                            i.send();
                    })(r[t], function (o) {
                        e.handleReceivedSourceTypeForUrl(o, r[t]), n.runActionsForSourceTypeAndIndex(o, t);
                    });
                });
        }
        function yt(t) {
            var e = t.props.sources,
                n = t.st,
                o = t.stageIndexes,
                i = e.length - 1;
            (n.getPreviousSlideIndex = function () {
                return 0 === o.current ? i : o.current - 1;
            }),
                (n.getNextSlideIndex = function () {
                    return o.current === i ? 0 : o.current + 1;
                }),
                (n.u =
                    0 === i
                        ? function () {}
                        : 1 === i
                        ? function () {
                              0 === o.current ? ((o.next = 1), delete o.previous) : ((o.previous = 0), delete o.next);
                          }
                        : function () {
                              (o.previous = n.getPreviousSlideIndex()), (o.next = n.getNextSlideIndex());
                          }),
                (n.i =
                    i <= 2
                        ? function () {
                              return !0;
                          }
                        : function (t) {
                              var e = o.current;
                              if ((0 === e && t === i) || (e === i && 0 === t)) return !0;
                              var n = e - t;
                              return -1 === n || 0 === n || 1 === n;
                          });
        }
        function Ct(t) {
            var e = t.componentsServices,
                o = t.core,
                i = o.eventsDispatcher,
                r = (o.lightboxOpener, o.globalEventsController),
                l = o.scrollbarRecompensor,
                d = o.sourceDisplayFacade,
                h = t.data,
                m = t.ea,
                b = t.elements,
                y = t.la,
                C = t.smw,
                L = t.st,
                N = t.stageIndexes,
                k = t.sws,
                B = t.ui,
                W = !1;
            function M() {
                var e,
                    o = t.props,
                    r = o.disableThumbs,
                    a = o.showThumbsOnMount,
                    l = o.sources;
                (W = !0),
                    (function (t) {
                        var e = t.props;
                        (t.dss = e.disableSlideSwiping),
                            (t.dt = e.disableThumbs),
                            (t.c = e.sources.length),
                            (t.tc = e.showThumbsWithCaptions);
                    })(t),
                    (h.scrollbarWidth = (function () {
                        var t = document.createElement("div"),
                            e = t.style,
                            n = document.createElement("div");
                        (e.visibility = "hidden"),
                            (e.width = "100px"),
                            (e.msOverflowStyle = "scrollbar"),
                            (e.overflow = "scroll"),
                            (n.style.width = "100%"),
                            document.body.appendChild(t);
                        var o = t.offsetWidth;
                        t.appendChild(n);
                        var i = n.offsetWidth;
                        return document.body.removeChild(t), o - i;
                    })()),
                    (h.unloadedThumbsCount = l.length),
                    r ||
                        ((h.isThumbing = a),
                        (function (t) {
                            var e = t.core,
                                n = t.data,
                                o = t.elements,
                                i = t.props;
                            (n.isThumbing = i.showThumbsOnMount),
                                (n.thumbsInnerWidth = null),
                                (n.thumbsTransform = 0),
                                (n.thumbedSourceEnhancementWrapperScale = null),
                                (n.thumbedSourceEnhancementWrapperTranslateY = null),
                                (n.unloadedThumbsCount = i.sources.length),
                                (t.thumbsSwipingProps = { i: !1, downScreenX: null, swipedX: null }),
                                (e.thumbLoadHandler = {}),
                                (e.thumbsRenderDispatcher = {}),
                                (e.thumbsSwipingDown = {}),
                                (e.thumbsToggler = {}),
                                (e.thumbsTransformer = {}),
                                (e.thumbsTransformTransitioner = {}),
                                (o.thumbsContainer = null),
                                (o.thumbs = []),
                                (o.thumbsWrappers = []),
                                (o.thumbsComponents = []),
                                (o.thumbsInner = null),
                                (function (t) {
                                    var e = t.core.thumbLoadHandler,
                                        n = t.componentsServices,
                                        o = t.data,
                                        i = t.elements.thumbsWrappers,
                                        s = t.la;
                                    e.handleLoad = function () {
                                        if ((o.unloadedThumbsCount--, 0 === o.unloadedThumbsCount)) {
                                            for (var t = 0; t < i.length; t++) i[t].classList.add(u);
                                            s.rt(), n.hideThumbsLoader();
                                        }
                                    };
                                })(t),
                                (function (t) {
                                    var e = t.core.thumbsRenderDispatcher,
                                        n = t.props.sources,
                                        o = [],
                                        i = !1,
                                        s = 0;
                                    (e.addFunctionToToBeRenderedAtIndex = function (t, e) {
                                        (o[e] = t), s++;
                                    }),
                                        (e.renderThumbsIfNotYetAndAllTypesDetected = function () {
                                            if (!i && s === n.length) {
                                                i = !0;
                                                for (var t = 0; t < n.length; t++) o[t]();
                                            }
                                        });
                                })(t),
                                (function (t) {
                                    var e = t.core,
                                        n = e.thumbsSwipingDown,
                                        o = e.pointeringBucket,
                                        i = t.thumbsSwipingProps;
                                    n.listener = function (t) {
                                        t.preventDefault(), o.runSwipingDownActionsForPropsAndEvent(i, t);
                                    };
                                })(t),
                                (function (t) {
                                    var e = t.core.thumbsToggler,
                                        n = t.data,
                                        o = (0, t.resolve)(T);
                                    e.toggleThumbs = function () {
                                        n.isThumbing ? o.x() : o.o();
                                    };
                                })(t),
                                (function (t) {
                                    var e = t.core,
                                        n = e.thumbsTransformer,
                                        o = e.thumbsTransformTransitioner,
                                        i = t.data,
                                        s = (0, t.resolve)(A);
                                    (n.transformToCurrent = function () {
                                        i.thumbsInnerWidth > innerWidth ? s.runActions() : s.runToThinThumbsActions();
                                    }),
                                        (n.transformToCurrentWithTransition = function () {
                                            i.thumbsInnerWidth > innerWidth && o.callActionWithTransition(s.runActions);
                                        });
                                })(t),
                                (function (t) {
                                    var e = t.core.thumbsTransformTransitioner,
                                        n = t.elements,
                                        o = (0, t.q)(function () {
                                            n.thumbsInner.classList.remove("fslightboxtt");
                                        }, 300);
                                    e.callActionWithTransition = function (t) {
                                        n.thumbsInner.classList.add("fslightboxtt"), t(), o();
                                    };
                                })(t);
                        })(t)),
                    (function (t) {
                        !(function (t) {
                            var e = t.core,
                                n = e.classFacade,
                                o = e.st,
                                i = t.elements;
                            (n.removeFromEachElementClassIfContains = function (t, e) {
                                for (var n = 0; n < i[t].length; n++) z(i[t][n], e);
                            }),
                                (n.stagedRemovalAndOutstagedAddingOfClassIfContains = function (t, e) {
                                    for (var n = 0; n < i[t].length; n++) o.i(n) ? z(i[t][n], e) : S(i[t][n], e);
                                });
                        })(t),
                            (function (t) {
                                var e = t.core.clickZoomer,
                                    n = (t.elements, t.props.zoomIncrement),
                                    o = t.q,
                                    i = t.z,
                                    s = o(function () {
                                        z(t.swc, "fslightboxtt");
                                    }, 300);
                                (e.zoomIn = function () {
                                    r(), a(t.zv + n);
                                }),
                                    (e.zoomOut = function () {
                                        t.zv - n <= 1
                                            ? 1 !== t.zv && (a(1), i.e())
                                            : (r(), a(t.zv - n), 1 === t.zv && i.e());
                                    });
                                var r = function () {
                                        1 === t.zv && i.b();
                                    },
                                    a = function (e) {
                                        S(t.swc, "fslightboxtt"), i.z(e), s();
                                    };
                            })(t),
                            (function (t) {
                                var e = t.ea,
                                    n = t.data,
                                    o = t.elements,
                                    i = o.captions,
                                    s = o.thumbs,
                                    r = (t.stageIndexes, t.tc),
                                    a = t.ui;
                                function c(t) {
                                    if (r)
                                        for (var e = 0; e < i.length; e++) {
                                            var n = i[e];
                                            n && n.classList[t]("fslightboxct");
                                        }
                                }
                                (e.c = function (e, o) {
                                    (r || !n.isThumbing || t.xu) && (a.hc(e), a.sc(o));
                                }),
                                    (e.dc = function () {
                                        c("remove");
                                    }),
                                    (e.uc = function () {
                                        c("add");
                                    }),
                                    (e.t = function (t, e) {
                                        s &&
                                            s[e] &&
                                            (s[t].classList.remove("fslightboxta"), s[e].classList.add("fslightboxta"));
                                    });
                            })(t),
                            (function (t) {
                                var e = t.core.eventsDispatcher,
                                    n = t.props;
                                e.dispatch = function (e) {
                                    n[e] && n[e](t);
                                };
                            })(t),
                            (function (t) {
                                var e = t.componentsServices,
                                    n = t.data,
                                    o = t.fs,
                                    i = [
                                        "fullscreenchange",
                                        "webkitfullscreenchange",
                                        "mozfullscreenchange",
                                        "MSFullscreenChange",
                                    ];
                                function s(t) {
                                    for (var e = 0; e < i.length; e++) document[t](i[e], r);
                                }
                                function r() {
                                    document.fullscreenElement ||
                                    document.webkitIsFullScreen ||
                                    document.mozFullScreen ||
                                    document.msFullscreenElement
                                        ? e.ofs()
                                        : e.xfs();
                                }
                                (o.o = function () {
                                    e.ofs();
                                    var t = document.documentElement;
                                    t.requestFullscreen
                                        ? t.requestFullscreen()
                                        : t.mozRequestFullScreen
                                        ? t.mozRequestFullScreen()
                                        : t.webkitRequestFullscreen
                                        ? t.webkitRequestFullscreen()
                                        : t.msRequestFullscreen && t.msRequestFullscreen();
                                }),
                                    (o.x = function () {
                                        e.xfs(),
                                            document.exitFullscreen
                                                ? document.exitFullscreen()
                                                : document.mozCancelFullScreen
                                                ? document.mozCancelFullScreen()
                                                : document.webkitExitFullscreen
                                                ? document.webkitExitFullscreen()
                                                : document.msExitFullscreen && document.msExitFullscreen();
                                    }),
                                    (o.t = function () {
                                        n.ifs ? o.x() : o.o();
                                    }),
                                    (o.l = function () {
                                        s("addEventListener");
                                    }),
                                    (o.q = function () {
                                        s("removeEventListener");
                                    });
                            })(t),
                            (function (t) {
                                var e,
                                    n = t.core.globalEventsController,
                                    o = t.fs,
                                    i = t.la,
                                    s = t.r,
                                    r = (t.ui, s(X));
                                (n.addListeners = function () {
                                    document.addEventListener("pointermove", r.m),
                                        document.addEventListener("pointerup", r.u),
                                        addEventListener("resize", i.r),
                                        (e = function (e) {
                                            Y(t, e);
                                        }),
                                        document.addEventListener("keydown", e),
                                        document.addEventListener("wheel", r.w),
                                        o.l();
                                }),
                                    (n.removeListeners = function () {
                                        document.removeEventListener("pointermove", r.m),
                                            document.removeEventListener("pointerup", r.u),
                                            removeEventListener("resize", i.r),
                                            document.removeEventListener("keydown", e),
                                            document.removeEventListener("wheel", r.w),
                                            o.q();
                                    });
                            })(t),
                            (function (t) {
                                t.c;
                                var e = t.data,
                                    n = t.ea,
                                    o = t.elements,
                                    i = t.f,
                                    s = t.la,
                                    r = t.props.UIFadeOutTime,
                                    a = t.q,
                                    c = t.stageIndexes,
                                    u = t.tc,
                                    l = t.ui,
                                    d = o.captions,
                                    h = a(function () {
                                        (t.xu = !0),
                                            f(y),
                                            1 === t.zv && e.isThumbing && (s.ut(), u ? n.dc() : l.sc(c.current));
                                    }, r);
                                function f(t) {
                                    p(t), m(t), e.isThumbing && w(t);
                                }
                                function p(t) {
                                    t(o.nav);
                                }
                                function m(t) {
                                    o.slideButtonPrevious && (t(o.slideButtonPrevious), t(o.slideButtonNext));
                                }
                                function b(t, e) {
                                    x(t, e);
                                }
                                function g(t) {
                                    m(t), e.isThumbing ? (w(t), u && v(t)) : v(t);
                                }
                                function v(t) {
                                    x(t, c.current);
                                }
                                function x(t, e) {
                                    var n = d[e];
                                    n && t(n);
                                }
                                function w(t) {
                                    t(o.thumbsContainer);
                                }
                                function y(t) {
                                    t.classList.add("fslightboxx");
                                }
                                function C(t) {
                                    t.classList.remove("fslightboxx");
                                }
                                r
                                    ? ((l.qps = function () {
                                          h(),
                                              t.xu && ((t.xu = !1), 1 === t.zv ? f(C) : p(C)),
                                              1 === t.zv &&
                                                  e.isThumbing &&
                                                  (i(function (t) {
                                                      s.t(t);
                                                  }),
                                                  u ? n.uc() : l.hc(c.current));
                                      }),
                                      (l.q = function () {
                                          h();
                                      }))
                                    : ((l.qps = function () {}), (l.q = function () {})),
                                    (l.sc = function (t) {
                                        b(C, t);
                                    }),
                                    (l.hc = function (t) {
                                        b(y, t);
                                    }),
                                    (l.zh = function () {
                                        g(y);
                                    }),
                                    (l.zs = function () {
                                        g(C);
                                    }),
                                    (l.sthc = function () {
                                        w(C), u || v(y);
                                    }),
                                    (l.htsc = function () {
                                        w(y), u || v(C);
                                    });
                            })(t),
                            (function (t) {
                                var e = t.core.lightboxCloser,
                                    n = (0, t.resolve)(I);
                                e.close = function () {
                                    n.isLightboxFadingOut || n.runActions();
                                };
                            })(t),
                            (function (t) {
                                var e = t.core.pointeringBucket;
                                t.elements,
                                    (e.runSwipingDownActionsForPropsAndEvent = function (t, e) {
                                        (t.i = !0), (t.downScreenX = e.screenX), (t.swipedX = 0);
                                    }),
                                    (e.runSwipingMoveActionsForPropsAndEvent = function (e, n) {
                                        S(t.h, "fslightboxcg"), (e.swipedX = n.screenX - e.downScreenX);
                                    }),
                                    (e.runSwipingTopActionsForPropsAndEvent = function (e) {
                                        z(t.h, "fslightboxcg"), (e.i = !1);
                                    });
                            })(t),
                            (function (t) {
                                var e = t.data,
                                    n = t.core.scrollbarRecompensor;
                                n.addRecompense = function () {
                                    "complete" === document.readyState
                                        ? o()
                                        : window.addEventListener("load", function () {
                                              o(), (n.addRecompense = o);
                                          });
                                };
                                var o = function () {
                                    document.body.offsetHeight > window.innerHeight &&
                                        (document.body.style.marginRight = e.scrollbarWidth + "px");
                                };
                                n.removeRecompense = function () {
                                    document.body.style.removeProperty("margin-right");
                                };
                            })(t),
                            (function (t) {
                                var e = t.c,
                                    n = t.core.thumbsTransformer,
                                    o = t.data,
                                    i = t.dt,
                                    s = t.elements,
                                    r = t.f,
                                    a = t.isl,
                                    c = t.la,
                                    u = t.props.sourceMargin,
                                    l = t.sew,
                                    d = t.smw,
                                    h = t.sz,
                                    f = t.stageIndexes,
                                    p = t.tc,
                                    m = s.captions,
                                    b = s.thumbs,
                                    g = 1 - 2 * u,
                                    v = 1 - u,
                                    x = [],
                                    w = [],
                                    y = [],
                                    C = [],
                                    L = [],
                                    T = 0;
                                function z() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                                    l[arguments.length > 2 ? arguments[2] : void 0].style.transform = "translateY("
                                        .concat(t, "px) scale(")
                                        .concat(e, ")");
                                }
                                (c.r = function () {
                                    innerWidth > 992 ? (t.mw = g * innerWidth) : (t.mw = innerWidth),
                                        (t.mh = g * innerHeight),
                                        0 === o.unloadedThumbsCount && c.rt(),
                                        void 0 !== f.previous && d[f.previous].ne(),
                                        void 0 !== f.next && d[f.next].p(),
                                        r(function (t) {
                                            var e = h[t],
                                                n = m[t];
                                            e && e.s(),
                                                n && (x[t] = n.offsetHeight),
                                                i || (T = s.thumbsContainer.offsetHeight),
                                                c.s(t),
                                                d[t].d(),
                                                c.t(t);
                                        });
                                }),
                                    (c.s = function (t) {
                                        var e = h[t];
                                        if (e) {
                                            var n = e.d(),
                                                o = n[0] + n[1];
                                            if (x[t]) {
                                                var s = e.g(innerHeight * v - x[t]);
                                                (w[t] = (s[0] + s[1]) / o),
                                                    (L[t] = -(x[t] - innerHeight / 2 + s[1] / 2)),
                                                    L[t] > 0 && (L[t] = 0);
                                            }
                                            if (!i) {
                                                if (p && x[t]) {
                                                    var r = T + x[t];
                                                    (a = e.g((innerHeight - r) * (1 - 1.4 * u) + 34)),
                                                        (y[t] = (a[0] + a[1]) / o),
                                                        (C[t] = -(r - 34 - innerHeight / 2 + a[1] / 2));
                                                } else {
                                                    var a = e.g(innerHeight * v - T);
                                                    (y[t] = (a[0] + a[1]) / o),
                                                        (C[t] = -(T - innerHeight / 2 + a[1] / 2));
                                                }
                                                C[t] > 0 && (C[t] = 0);
                                            }
                                        }
                                    }),
                                    (c.t = function (e) {
                                        a[e] &&
                                            (1 !== t.zv
                                                ? z(0, 1, e)
                                                : o.isThumbing
                                                ? z(C[e], y[e], e)
                                                : z(L[e], w[e], e));
                                    }),
                                    (c.ut = function () {
                                        r(function (t) {
                                            a[t] && z(L[t], w[t], t);
                                        });
                                    }),
                                    (c.rt = function () {
                                        o.thumbsInnerWidth = 0;
                                        for (var t = 0; t < e; t++) o.thumbsInnerWidth += b[t].offsetWidth + 8;
                                        n.transformToCurrent();
                                    });
                            })(t),
                            F(t),
                            (function (t) {
                                var e = t.core,
                                    n = e.slideChangeFacade,
                                    o = e.slideIndexChanger,
                                    i = t.props.sources,
                                    s = t.st;
                                i.length > 1
                                    ? ((n.changeToPrevious = function () {
                                          o.jumpTo(s.getPreviousSlideIndex());
                                      }),
                                      (n.changeToNext = function () {
                                          o.jumpTo(s.getNextSlideIndex());
                                      }))
                                    : ((n.changeToPrevious = function () {}), (n.changeToNext = function () {}));
                            })(t),
                            (function (t) {
                                var e = t.componentsServices,
                                    n = t.core,
                                    o = n.eventsDispatcher,
                                    i = n.slideIndexChanger,
                                    s = n.sourceDisplayFacade,
                                    r = n.thumbsTransformer,
                                    a = t.ea,
                                    c = t.isl,
                                    u = t.props.disableThumbs,
                                    l = t.resolve,
                                    d = t.smw,
                                    h = t.st,
                                    f = t.stageIndexes,
                                    p = t.sws,
                                    m = t.z;
                                (i.changeTo = function (t) {
                                    var n = f.current;
                                    m.r(),
                                        a.c(n, t),
                                        (f.current = t),
                                        h.u(),
                                        e.setSlideNumber(t + 1),
                                        u || (a.t(n, t), r.transformToCurrentWithTransition()),
                                        s.displaySourcesWhichShouldBeDisplayed(),
                                        o.dispatch("onSlideChange");
                                }),
                                    (i.jumpTo = function (t) {
                                        var e = f.current;
                                        if (e !== t) {
                                            var n = l(E, [
                                                { previous: f.previous, current: e, next: f.next },
                                                c[e],
                                                c[t],
                                            ]);
                                            i.changeTo(t);
                                            for (var o = 0; o < d.length; o++) d[o].d();
                                            p.d(e),
                                                p.c(),
                                                requestAnimationFrame(function () {
                                                    requestAnimationFrame(n.runJumpReflowedActions);
                                                });
                                        }
                                    });
                            })(t),
                            (function (t) {
                                var e = t.collections.sourcesRenderFunctions,
                                    n = t.core.sourceDisplayFacade,
                                    o = t.props.loadOnlyCurrentSource,
                                    i = t.stageIndexes;
                                function s(t) {
                                    e[t] && (e[t](), delete e[t]);
                                }
                                n.displaySourcesWhichShouldBeDisplayed = function () {
                                    if (o) s(i.current);
                                    else for (var t in i) s(i[t]);
                                };
                            })(t),
                            (function (t) {
                                var e = t.isl,
                                    n = t.props,
                                    o = n.initialAnimation,
                                    i = n.slideChangeAnimation,
                                    s = t.stageIndexes,
                                    r = t.saw,
                                    a = t.smw,
                                    c = t.st,
                                    u = t.sws;
                                (u.a = function () {
                                    for (var t in s) a[s[t]].s();
                                }),
                                    (u.b = function (t) {
                                        void 0 === t || c.i(t) || (a[t].h(), a[t].n());
                                    }),
                                    (u.c = function () {
                                        for (var t in s) u.d(s[t]);
                                    }),
                                    (u.d = function (t) {
                                        if (e[t]) {
                                            var n = r[t];
                                            z(n, o), z(n, i), z(n, f);
                                        }
                                    });
                            })(t),
                            (function (t) {
                                var e = t.elements,
                                    n = e.sources,
                                    o = e.smw,
                                    i = t.la,
                                    s = t.p,
                                    r = ((o = t.smw), t.stageIndexes),
                                    a = t.ui,
                                    c = t.z;
                                function u(t) {
                                    var e = n[r.current];
                                    e && (e.style.cursor = t);
                                }
                                (c.z = function (e) {
                                    (t.zv = parseFloat(e.toPrecision(12))),
                                        (t.swc.style.transform = "scale(".concat(t.zv, ")"));
                                }),
                                    (c.r = function () {
                                        1 !== t.zv && (c.z(1), c.e());
                                    }),
                                    (c.b = function () {
                                        u("grab"), a.zh(), i.t();
                                    }),
                                    (c.e = function () {
                                        u("zoom-in"),
                                            a.zs(),
                                            o[r.current].a(),
                                            o[r.current].v(0, 0).z(),
                                            (s.ux = 0),
                                            (s.uy = 0);
                                    });
                            })(t);
                    })(t),
                    (function (t) {
                        var e = t.elements,
                            o = document.createElement("div");
                        (o.className = "".concat(n, "container ").concat(s, " ").concat(p)), (e.container = o);
                    })(t),
                    (function (t) {
                        (t.h = document.createElement("div")), (t.h.className = "fslightboxth ".concat(s).concat(c));
                    })(t),
                    Z(t),
                    (function (t) {
                        (t.ssb = document.createElement("div")),
                            (t.ssb.className = "fslightboxss ".concat(c)),
                            t.elements.container.appendChild(t.ssb);
                    })(t),
                    $(t),
                    (function (t) {
                        for (var e = t.props.captions, n = 0; n < e.length; n++) e[n] && K(t, n);
                    })(t),
                    l.length > 1 && (Q((e = t), "previous"), Q(e, "next")),
                    r ||
                        (function (t) {
                            var e = t.componentsServices,
                                n = t.elements,
                                o = t.data;
                            n.thumbsContainer = document.createElement("div");
                            var i,
                                r,
                                a = g;
                            function u() {
                                (r = !0), (i = J(n.thumbsContainer)).classList.add(v);
                            }
                            o.isThumbing ? u() : (a += " fslightboxx"),
                                (e.appendThumbsLoaderIfNotYet = function () {
                                    r || u();
                                }),
                                (e.hideThumbsLoader = function () {
                                    n.thumbsContainer.removeChild(i);
                                }),
                                (n.thumbsContainer.className = a),
                                n.container.appendChild(n.thumbsContainer),
                                (function (t) {
                                    var e = t.elements;
                                    (e.thumbsCursorer = document.createElement("div")),
                                        (e.thumbsCursorer.className = "".concat(x, " ").concat(s, " ").concat(c));
                                })(t),
                                (function (t) {
                                    var e = t.core.thumbsSwipingDown.listener,
                                        n = t.elements;
                                    (n.thumbsInner = document.createElement("div")),
                                        (n.thumbsInner.className = w),
                                        n.thumbsInner.addEventListener("pointerdown", e),
                                        n.thumbsContainer.appendChild(n.thumbsInner);
                                })(t);
                        })(t),
                    (function (t) {
                        for (
                            var e = t.props.sources, n = t.resolve, o = n(et), i = n(xt), s = n(wt, [o, i]), r = 0;
                            r < e.length;
                            r++
                        )
                            if ("string" == typeof e[r]) {
                                var a = s.getTypeSetByClientForIndex(r);
                                if (a) i.runActionsForSourceTypeAndIndex(a, r);
                                else {
                                    var c = o.getSourceTypeFromLocalStorageByUrl(e[r]);
                                    c ? i.runActionsForSourceTypeAndIndex(c, r) : s.retrieveTypeWithXhrForIndex(r);
                                }
                            } else i.runActionsForSourceTypeAndIndex(st, r);
                    })(t),
                    i.dispatch("onInit");
            }
            t.open = function () {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    o = N.previous,
                    s = N.current,
                    c = N.next;
                (N.current = n),
                    W || yt(t),
                    L.u(),
                    W
                        ? (k.c(),
                          k.a(),
                          k.b(o),
                          k.b(s),
                          k.b(c),
                          m.c(s, N.current),
                          m.t(s, N.current),
                          i.dispatch("onShow"))
                        : M(),
                    d.displaySourcesWhichShouldBeDisplayed(),
                    e.setSlideNumber(n + 1),
                    document.body.appendChild(b.container),
                    document.documentElement.classList.add(a),
                    l.addRecompense(),
                    r.addListeners(),
                    y.r(),
                    C[N.current].n(),
                    B.q(),
                    i.dispatch("onOpen");
            };
        }
        function Lt(t, e, n) {
            return (
                (Lt = Tt()
                    ? Reflect.construct.bind()
                    : function (t, e, n) {
                          var o = [null];
                          o.push.apply(o, e);
                          var i = new (Function.bind.apply(t, o))();
                          return n && zt(i, n.prototype), i;
                      }),
                Lt.apply(null, arguments)
            );
        }
        function Tt() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (t) {
                return !1;
            }
        }
        function zt(t, e) {
            return (
                (zt = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                          return (t.__proto__ = e), t;
                      }),
                zt(t, e)
            );
        }
        function St(t) {
            return (
                (function (t) {
                    if (Array.isArray(t)) return At(t);
                })(t) ||
                (function (t) {
                    if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"])
                        return Array.from(t);
                })(t) ||
                (function (t, e) {
                    if (t) {
                        if ("string" == typeof t) return At(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return (
                            "Object" === n && t.constructor && (n = t.constructor.name),
                            "Map" === n || "Set" === n
                                ? Array.from(t)
                                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                ? At(t, e)
                                : void 0
                        );
                    }
                })(t) ||
                (function () {
                    throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                })()
            );
        }
        function At(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
            return o;
        }
        function It() {
            for (
                var t = document.getElementsByTagName("a"),
                    e = function (e) {
                        if (!t[e].hasAttribute("data-fslightbox")) return "continue";
                        var n = t[e].getAttribute("href");
                        if (!n)
                            return (
                                console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'),
                                "continue"
                            );
                        var o = t[e].getAttribute("data-fslightbox");
                        fsLightboxInstances[o] || (fsLightboxInstances[o] = new FsLightbox());
                        var i = null;
                        "#" === n.charAt(0)
                            ? (i = document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id")
                            : (i = n),
                            fsLightboxInstances[o].props.sources.push(i),
                            fsLightboxInstances[o].elements.a.push(t[e]);
                        var s = fsLightboxInstances[o].props.sources.length - 1;
                        (t[e].onclick = function (t) {
                            t.preventDefault(), fsLightboxInstances[o].open(s);
                        }),
                            d("captions", "data-caption"),
                            d("types", "data-type"),
                            d("thumbs", "data-thumb");
                        for (
                            var r = ["href", "data-fslightbox", "data-caption", "data-type", "data-thumb"],
                                a = t[e].attributes,
                                c = fsLightboxInstances[o].props.customAttributes,
                                u = 0;
                            u < a.length;
                            u++
                        )
                            if (-1 === r.indexOf(a[u].name) && "data-" === a[u].name.substr(0, 5)) {
                                c[s] || (c[s] = {});
                                var l = a[u].name.substr(5);
                                c[s][l] = a[u].value;
                            }
                        function d(n, i) {
                            t[e].hasAttribute(i) && (fsLightboxInstances[o].props[n][s] = t[e].getAttribute(i));
                        }
                    },
                    n = 0;
                n < t.length;
                n++
            )
                e(n);
            var o = Object.keys(fsLightboxInstances);
            window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
        }
        return (
            (window.FsLightbox = function () {
                var t = this;
                (this.props = {
                    sources: [],
                    maxYoutubeDimensions: null,
                    customAttributes: [],
                    customClasses: [],
                    types: [],
                    type: null,
                    thumbs: [],
                    thumbsIcons: [],
                    captions: [],
                    videosPosters: [],
                    customToolbarButtons: [],
                    initialAnimation: p,
                    slideChangeAnimation: h,
                    sourceMargin: 0.05,
                    slideDistance: 0.3,
                    slideshowTime: 8e3,
                    UIFadeOutTime: 8e3,
                    zoomIncrement: 0.25,
                    toolbarButtons: {
                        thumbs: {
                            width: "17px",
                            height: "17px",
                            viewBox: "0 0 22 22",
                            d: "M 3 2 C 2.448 2 2 2.448 2 3 L 2 6 C 2 6.552 2.448 7 3 7 L 6 7 C 6.552 7 7 6.552 7 6 L 7 3 C 7 2.448 6.552 2 6 2 L 3 2 z M 10 2 C 9.448 2 9 2.448 9 3 L 9 6 C 9 6.552 9.448 7 10 7 L 13 7 C 13.552 7 14 6.552 14 6 L 14 3 C 14 2.448 13.552 2 13 2 L 10 2 z M 17 2 C 16.448 2 16 2.448 16 3 L 16 6 C 16 6.552 16.448 7 17 7 L 20 7 C 20.552 7 21 6.552 21 6 L 21 3 C 21 2.448 20.552 2 20 2 L 17 2 z M 3 9 C 2.448 9 2 9.448 2 10 L 2 13 C 2 13.552 2.448 14 3 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 10 C 7 9.448 6.552 9 6 9 L 3 9 z M 10 9 C 9.448 9 9 9.448 9 10 L 9 13 C 9 13.552 9.448 14 10 14 L 13 14 C 13.552 14 14 13.552 14 13 L 14 10 C 14 9.448 13.552 9 13 9 L 10 9 z M 17 9 C 16.448 9 16 9.448 16 10 L 16 13 C 16 13.552 16.448 14 17 14 L 20 14 C 20.552 14 21 13.552 21 13 L 21 10 C 21 9.448 20.552 9 20 9 L 17 9 z M 3 16 C 2.448 16 2 16.448 2 17 L 2 20 C 2 20.552 2.448 21 3 21 L 6 21 C 6.552 21 7 20.552 7 20 L 7 17 C 7 16.448 6.552 16 6 16 L 3 16 z M 10 16 C 9.448 16 9 16.448 9 17 L 9 20 C 9 20.552 9.448 21 10 21 L 13 21 C 13.552 21 14 20.552 14 20 L 14 17 C 14 16.448 13.552 16 13 16 L 10 16 z M 17 16 C 16.448 16 16 16.448 16 17 L 16 20 C 16 20.552 16.448 21 17 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 17 C 21 16.448 20.552 16 20 16 L 17 16 z",
                            title: "Thumbnails",
                        },
                        zoomIn: {
                            width: "20px",
                            height: "20px",
                            viewBox: "0 0 30 30",
                            d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 12.984375 7.9863281 A 1.0001 1.0001 0 0 0 12 9 L 12 12 L 9 12 A 1.0001 1.0001 0 1 0 9 14 L 12 14 L 12 17 A 1.0001 1.0001 0 1 0 14 17 L 14 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 14 12 L 14 9 A 1.0001 1.0001 0 0 0 12.984375 7.9863281 z",
                            title: "Zoom In",
                        },
                        zoomOut: {
                            width: "20px",
                            height: "20px",
                            viewBox: "0 0 30 30",
                            d: "M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 9 12 A 1.0001 1.0001 0 1 0 9 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 9 12 z",
                            title: "Zoom Out",
                        },
                        slideshow: {
                            start: {
                                width: "16px",
                                height: "16px",
                                viewBox: "0 0 30 30",
                                d: "M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z",
                                title: "Turn on slideshow",
                            },
                            pause: {
                                width: "14px",
                                height: "14px",
                                viewBox: "0 0 356.19 356.19",
                                d: "M121,0c18,0,33,15,33,33v372c0,18-15,33-33,33s-32-15-32-33V33C89,15,103,0,121,0zM317,0c18,0,32,15,32,33v372c0,18-14,33-32,33s-33-15-33-33V33C284,15,299,0,317,0z",
                                title: "Turn off slideshow",
                            },
                        },
                        fullscreen: {
                            enter: {
                                width: "20px",
                                height: "20px",
                                viewBox: "0 0 18 18",
                                d: "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                                title: "Enter fullscreen",
                            },
                            exit: {
                                width: "24px",
                                height: "24px",
                                viewBox: "0 0 950 1024",
                                d: "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
                                title: "Exit fullscreen",
                            },
                        },
                        close: {
                            width: "20px",
                            height: "20px",
                            viewBox: "0 0 24 24",
                            d: "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z",
                            title: "Close",
                        },
                    },
                    slideButtons: {
                        previous: {
                            width: "20px",
                            height: "20px",
                            viewBox: "0 0 20 20",
                            d: "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z",
                            title: "Previous",
                        },
                        next: {
                            width: "20px",
                            height: "20px",
                            viewBox: "0 0 20 20",
                            d: "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z",
                            title: "Next",
                        },
                    },
                }),
                    (this.data = { isThumbing: !1, scrollbarWidth: 0 }),
                    (this.ifs = !1),
                    (this.isl = []),
                    (this.qs = []),
                    (this.ts = []),
                    (this.zv = 1),
                    (this.p = { p: {}, ux: 0, uy: 0 }),
                    (this.stageIndexes = {}),
                    (this.elements = {
                        a: [],
                        captions: [],
                        container: null,
                        nav: null,
                        slideButtonPrevious: null,
                        slideButtonNext: null,
                        sources: [],
                    }),
                    (this.saw = []),
                    (this.sew = []),
                    (this.smw = []),
                    (this.componentsServices = { setSlideNumber: function () {} }),
                    (this.f = function (e) {
                        for (var n = 0; n < t.c; n++) e(n);
                    }),
                    (this.m = function (e, n) {
                        return function () {
                            for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                            i.unshift(t), n.apply(void 0, i) && e.apply(void 0, i);
                        };
                    }),
                    (this.resolve = function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        return n.unshift(t), Lt(e, St(n));
                    }),
                    (this.r = this.resolve),
                    (this.collections = { sourceLoadHandlers: [], sourcesRenderFunctions: [] }),
                    (this.sz = []),
                    (this.core = {
                        classFacade: {},
                        clickZoomer: {},
                        eventsDispatcher: {},
                        globalEventsController: {},
                        lightboxCloser: {},
                        lightboxUpdater: {},
                        pointeringBucket: {},
                        scrollbarRecompensor: {},
                        slideChangeFacade: {},
                        slideIndexChanger: {},
                        sourceDisplayFacade: {},
                        swipingActioner: {},
                    }),
                    (this.ea = {}),
                    (this.fs = {}),
                    (this.la = {}),
                    (this.ss = {}),
                    (this.st = {}),
                    (this.sws = {}),
                    (this.ui = {}),
                    (this.z = {}),
                    (this.t = function (e, n) {
                        var o = t.ts.push(
                            setTimeout(function () {
                                delete t.ts[o - 1], e();
                            }, n)
                        );
                    }),
                    (this.q = function (e, n) {
                        var o = t.qs.push(0) - 1;
                        return function () {
                            t.qs[o]++,
                                t.t(function () {
                                    t.qs[o]--, t.qs[o] || e();
                                }, n);
                        };
                    }),
                    Ct(this),
                    (this.close = function () {
                        return t.core.lightboxCloser.close();
                    });
            }),
            (window.fsLightboxInstances = {}),
            It(),
            (window.refreshFsLightbox = function () {
                for (var t in fsLightboxInstances) {
                    var e = fsLightboxInstances[t].props;
                    (fsLightboxInstances[t] = new FsLightbox()),
                        (fsLightboxInstances[t].props = e),
                        (fsLightboxInstances[t].props.sources = []),
                        (fsLightboxInstances[t].elements.a = []);
                }
                It();
            }),
            t
        );
    })()
);
