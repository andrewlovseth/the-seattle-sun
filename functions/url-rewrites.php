<?php

function custom_newsletter_permalink($post_link, $post) {
    if ('newsletter' === $post->post_type && $terms = get_the_terms($post->ID, 'collection')) {
        $post_link = str_replace('%collection%', array_pop($terms)->slug, $post_link);
    } else {
        $post_link = str_replace('%collection%', 'uncategorized', $post_link);
    }
    return $post_link;
}
add_filter('post_type_link', 'custom_newsletter_permalink', 10, 2);


function custom_newsletter_rewrite_rules($rules) {
    $new_rules = array(
        'newsletters/([^/]+)/([^/]+)/?$' => 'index.php?newsletter=$matches[2]&collection=$matches[1]',
    );
    return $new_rules + $rules;
}
add_filter('rewrite_rules_array', 'custom_newsletter_rewrite_rules');