<?php

function get_primary_category_name( $post_id, $taxonomy = 'category' ) {
    $primary_term_id = get_post_meta( $post_id, 'spc_primary_' . $taxonomy, true );
    
    if ( ! empty( $primary_term_id ) ) {
        $term = get_term( $primary_term_id, $taxonomy );
        return ( ! is_wp_error( $term ) && $term ) ? $term->name : false;
    }
    
    return false;
}

function get_primary_category_id( $post_id, $taxonomy = 'category' ) {
    $primary_term_id = get_post_meta( $post_id, 'spc_primary_' . $taxonomy, true );
    
    if ( ! empty( $primary_term_id ) ) {
        $term = get_term( $primary_term_id, $taxonomy );
        return ( ! is_wp_error( $term ) && $term ) ? $term->term_id : false;
    }
    
    return false;
}