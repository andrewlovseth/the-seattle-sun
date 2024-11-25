<?php

/*
	Disable Gutenberg Editor
*/


// Templates and Page IDs without editor
function bearsmith_disable_editor( $id = false ) {

	$excluded_templates = array(
		'templates/home.php',
	);

	$excluded_ids = array(
		// 1,		
	);

	if( empty( $id ) )
		return false;

	$id = intval( $id );
	$template = get_page_template_slug( $id );

	return in_array( $id, $excluded_ids ) || in_array( $template, $excluded_templates );
}


// Disable Gutenberg by template
function bearsmith_disable_gutenberg( $can_edit, $post_type ) {
    // Disable Gutenberg for 'metro' post type
    if( $post_type === 'metro' ) {
        return false;
    }

    // Check if we're in admin and have a post ID
    if( ! ( is_admin() && !empty( $_GET['post'] ) ) )
        return $can_edit;

    // Get the post ID
    $post_id = $_GET['post'];

    // Check for specific format terms
    $format_terms = wp_get_post_terms($post_id, 'format', array('fields' => 'slugs'));
    $disabled_formats = array('photos', 'quote', 'on-the-web', 'around-town', 'by-the-numbers');
    
    if (!empty($format_terms) && array_intersect($format_terms, $disabled_formats)) {
        return false;
    }

    // Check template exclusions
    if( bearsmith_disable_editor( $post_id ) )
        $can_edit = false;

    return $can_edit;
}
add_filter( 'gutenberg_can_edit_post_type', 'bearsmith_disable_gutenberg', 10, 2 );
add_filter( 'use_block_editor_for_post_type', 'bearsmith_disable_gutenberg', 10, 2 );


// Disable Classic Editor by template
function bearsmith_disable_classic_editor() {

	$screen = get_current_screen();
	if( 'page' !== $screen->id || ! isset( $_GET['post']) )
		return;

	if( bearsmith_disable_editor( $_GET['post'] ) ) {
		remove_post_type_support( 'page', 'editor' );
	}

}
add_action( 'admin_head', 'bearsmith_disable_classic_editor' );

