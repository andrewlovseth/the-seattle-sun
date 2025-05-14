<?php

$args = array(
    'post_type' => 'newsletter',
    'tax_query' => array(
        array(
            'taxonomy' => 'collection',
            'field' => 'slug',
            'terms' => get_queried_object()->slug,
        ),
    ),
);

get_header(); ?>

    <section class="newsletter-header | content-grid">
        <?php get_template_part('components/dividers/top-divider'); ?>

        <div class="newsletter-header__info">
            <h1 class="page-title"><?php single_term_title(); ?></h1>
            <div class="newsletter-header__description"><?php echo term_description(); ?></div>
        </div>

        <?php get_template_part('components/dividers/bottom-divider'); ?>
    </section>

    <section class="newsletter-archive | content-grid">
        <?php $query = new WP_Query($args); if ($query->have_posts()) : ?>

            <div class="newsletter-archive__grid">
                <?php while ($query->have_posts()) : $query->the_post(); ?>

                    <?php
                        $cover = get_field('cover');
                        $edition = get_field('edition');
                        $date = get_field('date');
                    ?>

                    <article class="archive-item">
                        <a href="<?php the_permalink(); ?>" class="archive-item__link">
                            <div class="archive-item__image">
                                <?php echo wp_get_attachment_image($cover['ID'], 'medium'); ?>
                            </div>

                            <div class="archive-item__info">
                                <div class="published">
                                    <span class="published__issue">Issue No. <?php echo $edition; ?></span>
                                    <span class="published__date"><?php echo $date; ?></span>
                                </div>
                            </div>
                        </a>
                    </article>  
                <?php endwhile; ?>
            </div>

        <?php endif; wp_reset_postdata(); ?>
    </section>

<?php get_footer(); ?>