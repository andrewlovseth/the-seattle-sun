<?php

/*

    Template Name: Home

*/

get_header(); ?>

    <?php
        $newsletter = get_field('newsletter');
        $newsletter_id = $newsletter->ID;
        
        $collections = wp_get_post_terms($newsletter_id, 'collection');
        $collection = !empty($collections) ? $collections[0]->slug : null;
        $collection_id = !empty($collections) ? $collections[0]->term_id : null;

        $templates = wp_get_post_terms($newsletter_id, 'template');
        $template = !empty($templates) ? $templates[0]->slug : null;
        $template_path = 'templates/' . $collection . '/' . $template;
        $template_id = !empty($templates) ? $templates[0]->term_id : null;

        $prev_args = array(
            'post_type' => 'newsletter',
            'posts_per_page' => 1,
            'order' => 'DESC',
            'tax_query' => array(
                array(
                    'taxonomy' => 'collection',
                    'field' => 'term_id',
                    'terms' => $collection_id
                )
            ),
            'meta_query' => array(
                array(
                    'key' => 'edition',
                    'value' => get_field('edition', $newsletter_id),
                    'type' => 'NUMERIC',
                    'compare' => '<'
                )
            )
        );
        $prev_query = new WP_Query($prev_args);
        $prev_post = $prev_query->have_posts() ? $prev_query->posts[0] : null;

        $next_args = array(
            'post_type' => 'newsletter',
            'posts_per_page' => 1,
            'order' => 'ASC', 
            'tax_query' => array(
                array(
                    'taxonomy' => 'collection',
                    'field' => 'term_id',
                    'terms' => $collection_id
                )
            ),
            'meta_query' => array(
                array(
                    'key' => 'edition',
                    'value' => get_field('edition', $newsletter_id),
                    'type' => 'NUMERIC',
                    'compare' => '>'
                )
            )
        );
        $next_query = new WP_Query($next_args);
        $next_post = $next_query->have_posts() ? $next_query->posts[0] : null;

        $args = [
            'newsletter_id' => $newsletter_id,
            'collection_id' => $collection_id,
            'template_id' => $template_id,
            'home_prev_post' => $prev_post,
            'home_next_post' => $next_post
        ];
        get_template_part($template_path, null, $args);
    ?>

<?php get_footer(); ?>