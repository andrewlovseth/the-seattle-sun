<?php 

$formats = get_the_terms(get_the_ID(), 'format');
$format_slug = !empty($formats) ? $formats[0]->slug : null;

get_header(); ?>

    <?php //get_template_part('templates/single-post/header'); ?>
    <?php get_template_part('templates/single-post/related-newsletter'); ?>

    <?php if ( have_posts() ): ?>

        <section class="single-post__content | content-grid">
            <?php while ( have_posts() ): the_post(); ?>

                <?php get_template_part('templates/single-post/format/' . $format_slug); ?>
            <?php endwhile;  ?>
        </section>

    <?php endif; ?>


<?php get_footer(); ?>