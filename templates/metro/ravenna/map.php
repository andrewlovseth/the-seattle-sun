<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }

    $around_town = get_field('around_town', $newsletter_id);
    $around_town_posts = get_field('posts', $around_town->ID);
    $image = get_field('image', $around_town->ID);
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

                <div class="map__image">
                    <?php echo wp_get_attachment_image($image['ID'], 'full'); ?>
                </div>

            </div>


        </div>

        <div class="map__placeholder"></div>
    </section>

<?php endif; ?>