<?php get_header(); ?>

    <?php
        $newsletter_id = get_the_ID();
        $collections = wp_get_post_terms($newsletter_id , 'collection');
        $collection = !empty($collections) ? $collections[0]->slug : null;
        $collection_id = !empty($collections) ? $collections[0]->term_id : null;

        $templates = wp_get_post_terms($newsletter_id, 'template');
        $template = !empty($templates) ? $templates[0]->slug : null;
        $template_path = 'templates/' . $collection . '/' . $template;
        $template_id = !empty($templates) ? $templates[0]->term_id : null;

        $args = ['newsletter_id' => $newsletter_id, 'collection_id' => $collection_id, 'template_id' => $template_id];
        get_template_part($template_path, null, $args);
    ?>

<?php get_footer(); ?>