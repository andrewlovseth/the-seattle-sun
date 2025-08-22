<?php
/**
 * The template for displaying category archives
 */

get_header(); ?>

    <div class="archive__content | content-grid">
        <header class="page-header">
            <?php get_template_part('components/dividers/top-divider'); ?>

                <h1 class="page-title"><?php single_cat_title(); ?></h1>

            <?php get_template_part('components/dividers/bottom-divider'); ?>            
        </header>

        <?php if (have_posts()) : ?>
            <?php 
            $current_month = '';
            while (have_posts()) : the_post(); 
                $post_month = get_the_date('F Y');
                if ($current_month !== $post_month) {
                    if ($current_month !== '') {
                        echo '</div>'; // Close previous month's group
                    }
                    echo '<div class="month-group">';
                    echo '<h2 class="month-header">' . $post_month . '</h2>';
                    $current_month = $post_month;
                }
                $formats = get_the_terms(get_the_ID(), 'format');
                $format_slug = !empty($formats) ? $formats[0]->slug : null;
                get_template_part('components/archive/' . $format_slug);
            endwhile; 
            if ($current_month !== '') {
                echo '</div>'; // Close last month's group
            }
            ?>

            <?php
            the_posts_pagination(array(
                'mid_size'  => 2,
                'prev_text' => __('Prev', 'the-seattle-sun'),
                'next_text' => __('Next', 'the-seattle-sun'),
            ));
            ?>

        <?php else : ?>
            <p><?php esc_html_e('No posts found in this category.', 'the-seattle-sun'); ?></p>
        <?php endif; ?>
    </div>

<?php get_footer(); ?>
