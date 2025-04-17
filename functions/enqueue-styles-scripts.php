<?php

/*
	Enqueue Styles & Scripts
*/


// Enqueue custom styles and scripts
function bearsmith_enqueue_styles_and_scripts() {
    wp_enqueue_style( 'main-css', get_stylesheet_directory_uri() . '/style.css');
    wp_enqueue_script( 'main-js', get_stylesheet_directory_uri() . '/src/js/main.js');
    wp_enqueue_script( 'fslightbox-js', get_stylesheet_directory_uri() . '/src/js/fslightbox.js', array(), false, true);
}

add_action('wp_enqueue_scripts', 'bearsmith_enqueue_styles_and_scripts');

add_filter('script_loader_tag', 'add_module_to_my_script', 10, 3);
function add_module_to_my_script($tag, $handle, $src) {
    if ('main-js' === $handle) {
        $tag = '<script type="module" src="' . esc_url($src) . '"></script>';
    }

    return $tag;
}