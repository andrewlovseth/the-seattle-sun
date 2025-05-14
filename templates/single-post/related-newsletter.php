<?php

    $related_newsletter_args = array(
        'post_type' => 'newsletter',
        'posts_per_page' => 1,
        'meta_query' => array(
            'relation' => 'OR',
            array(
                'key' => 'lead',
                'value' => get_the_ID(),
                'compare' => '='
            ),
            array(
                'key' => 'headlines',
                'value' => '"' . get_the_ID() . '"',
                'compare' => 'LIKE'
            ),
            array(
                'key' => 'spotlight',
                'value' => '"' . get_the_ID() . '"',
                'compare' => 'LIKE'
            )
        )
    );

    $newsletter_query = new WP_Query($related_newsletter_args);
    $related_newsletter = $newsletter_query->have_posts() ? $newsletter_query->posts[0] : null;

?>

<?php if ($related_newsletter): ?>
    <?php
        $newsletter_edition = get_field('edition', $related_newsletter->ID);
        $newsletter_date = get_field('date', $related_newsletter->ID);
        $newsletter_title = get_the_title($related_newsletter->ID);
        $newsletter_cover = get_field('cover', $related_newsletter->ID);
        $collections = get_the_terms($related_newsletter->ID, 'collection');
        $collection = !empty($collections) ? $collections[0] : null;
    ?>

    <div class="single-post__related-newsletter | content-grid">

        <div class="related-newsletter">

            <div class="related-newsletter__grid">
                <div class="related-newsletter__cover">
                    <a href="<?php echo get_the_permalink($related_newsletter->ID); ?>">
                        <?php echo wp_get_attachment_image($newsletter_cover['ID'], 'medium'); ?>
                    </a>
                </div>

                <div class="related-newsletter__content">
                    <div class="published">
                        <span class="published__issue">Issue No. <?php echo $newsletter_edition; ?></span>
                        <a class="published__date" href="<?php echo get_the_permalink($related_newsletter->ID); ?>"><?php echo $newsletter_date; ?></a>
                    </div>

                    <div class="edition">
                        <a class="edition__name" href="<?php echo get_the_permalink($collection->ID); ?>"><?php echo $collection->name; ?></a>
                        <span class="edition__tagline"><?php echo $collection->description; ?></span>
                    </div>

                </div>
            </div>

            <?php get_template_part('components/dividers/bottom-divider'); ?>
        </div>

    </div>
<?php endif; wp_reset_postdata(); ?>

