<?php

// Register Election Results ACF Block
add_action('acf/init', function () {
    if ( ! function_exists('acf_register_block_type') ) return;
    
    acf_register_block_type([
        'name' => 'acf/election-results',
        'title' => 'Election Results',
        'description' => 'Display election results with candidates and vote counts.',
        'category' => 'widgets',
        'icon' => 'chart-bar',
        'keywords' => ['election', 'results', 'votes', 'candidates'],
        'render_callback' => 'render_election_results_block',
        'supports' => [
            'align' => ['wide', 'full'],
            'anchor' => true,
            'spacing' => ['margin' => true, 'padding' => true]
        ],
        'mode' => 'preview',
        'enqueue_style' => '', // No frontend CSS loading
        'enqueue_script' => '',
        'example' => [
            'attributes' => [],
            'data' => [
                'race' => 'Mayor',
                'results' => [
                    ['candidate_name' => 'Jane Doe', 'votes' => 5000, 'winner' => true, 'color' => '#2b78e4'],
                    ['candidate_name' => 'John Smith', 'votes' => 4500, 'winner' => false, 'color' => '#e44b2b']
                ],
                'total_votes' => 9500
            ]
        ]
    ]);
});

// Load editor-only CSS for the Election Results block
add_action('admin_enqueue_scripts', function() {
    global $pagenow;
    
    // Only load on post edit pages and block editor
    if (in_array($pagenow, ['post.php', 'post-new.php']) || 
        (function_exists('is_gutenberg_page') && is_gutenberg_page())) {
        
        wp_enqueue_style(
            'election-results-block-editor',
            get_template_directory_uri() . '/assets/css/election-results-block.css',
            array(),
            '1.0.0'
        );
    }
});

// Render function for the block
function render_election_results_block($block) {
    get_template_part('blocks/election-results', null, ['block' => $block]);
}
