<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $metro_id = $args['metro_id']; 
    }

    $around_town = get_field('around_town', $metro_id);
    $around_town_posts = get_field('posts', $around_town->ID);
    if( $around_town_posts ):
?>

    <section class="map">
        <div class="map__list">
            <?php get_template_part('components/headers/section', null, ['title' => 'Around Town']); ?>

            <?php while(have_rows('posts', $around_town->ID)) : the_row(); ?>

                <?php if( get_row_layout() == 'post' ): ?>

                    <?php
                        $headline = get_sub_field('headline');
                        $copy = get_sub_field('copy');
                    ?>

                    <article class="map__post">
                        <div class="map__item">
                            <span class="map__icon">
                                <?php echo chr(64 + $GLOBALS['map_counter'] = (!isset($GLOBALS['map_counter']) ? 1 : $GLOBALS['map_counter'] + 1)); ?>
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

        <div class="map__placeholder"></div>
    </section>

<?php endif; ?>