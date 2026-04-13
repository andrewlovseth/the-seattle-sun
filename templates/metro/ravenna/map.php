<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }

    $around_town = get_field('around_town', $newsletter_id);
    if(!$around_town) return;
    $around_town_posts = get_field('posts', $around_town->ID);
    $map = get_field('map', $around_town->ID);

    if( $around_town_posts ):
?>

    <section class="map">
    
        <div class="map__info">
            <?php get_template_part('components/headers/section', null, ['title' => 'Around Town']); ?>

            <div class="map__list">
                <div class="map__list-wrapper">
                    <?php while(have_rows('posts', $around_town->ID)) : the_row(); ?>

                    <?php if( get_row_layout() == 'post' ): ?>

                        <?php
                            $headline = get_sub_field('headline');
                            $copy = get_sub_field('copy');
                        ?>

                        <article class="map__post">
                            <div class="map__item">
                                <span class="map__icon">
                                    <?php get_template_part('src/svg/map-icon'); ?>
                                </span>
                            </div>

                            <div class="map__post-content">
                                <h3 class="map__headline">
                                    <?php echo $headline; ?>
                                </h3>

                                <div class="map__copy | copy-2">
                                    <?php echo $copy; ?>
                                </div>
                            </div>
                        </article>

                    <?php endif; ?>

                    <?php endwhile; ?>
                </div>
            </div>
        </div>

        <div class="map__figure">
            <div class="map__figure-wrapper">
                <?php
                    // Collect POIs with valid coordinates into a JSON data island.
                    // POIs missing latitude/longitude are skipped — not rendered on the map,
                    // though they still appear in the sidebar list above.
                    $pois = [];
                    while(have_rows('posts', $around_town->ID)) : the_row();
                        if( get_row_layout() == 'post' ) {
                            $lat = get_sub_field('latitude');
                            $lng = get_sub_field('longitude');

                            // Skip POIs with empty/null/zero coordinates.
                            if ( $lat && $lng ) {
                                $pois[] = [
                                    'lat'      => (float) $lat,
                                    'lng'      => (float) $lng,
                                    'headline' => (string) get_sub_field('headline'),
                                ];
                            }
                        }
                    endwhile;
                ?>

                <div class="map__canvas" data-map-canvas></div>

                <template data-map-marker>
                    <?php get_template_part('src/svg/poi', null, ['headline' => '']); ?>
                </template>

                <script type="application/json" data-map-pois><?php echo wp_json_encode($pois); ?></script>
            </div>
        </div>
    </section>

<?php endif; ?>