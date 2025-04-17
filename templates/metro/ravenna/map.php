<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }

    $around_town = get_field('around_town', $newsletter_id);
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
            <?php while(have_rows('posts', $around_town->ID)) : the_row(); ?>
                <?php if( get_row_layout() == 'post' ): ?>

                    <?php
                        $top = get_sub_field('top');
                        $left = get_sub_field('left');
                        $headline = get_sub_field('headline');
                        get_template_part('src/svg/poi', null, ['top' => $top, 'left' => $left, 'headline' => $headline]);
                    ?>

                <?php endif; ?>
            <?php endwhile; ?>

            <?php echo wp_get_attachment_image($map['ID'], 'full'); ?>
        </div>
    </section>

<?php endif; ?>