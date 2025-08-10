<?php

$args = array(
    'post_type' => 'newsletter',
    'tax_query' => array(
        array(
            'taxonomy' => 'collection',
            'field' => 'slug',
            'terms' => get_queried_object()->slug,
        ),
    ),
    'posts_per_page' => -1, // Get all posts
    'orderby' => 'date',
    'order' => 'DESC'
);

get_header(); ?>

    <section class="newsletter-header | content-grid">
        <?php get_template_part('components/dividers/top-divider'); ?>

        <div class="newsletter-header__info">
            <h1 class="page-title"><?php single_term_title(); ?></h1>
            <div class="newsletter-header__description"><?php echo term_description(); ?></div>
        </div>

        <?php get_template_part('components/dividers/bottom-divider'); ?>
    </section>

    <section class="newsletter-archive | content-grid">
        <?php 
        // First, get all seasons ordered by start_date in reverse chronological order
        $seasons = get_terms(array(
            'taxonomy' => 'season',
            'hide_empty' => true,
            'meta_query' => array(
                array(
                    'key' => 'start_date',
                    'compare' => 'EXISTS'
                )
            ),
            'meta_key' => 'start_date',
            'orderby' => 'meta_value',
            'order' => 'DESC'
        ));
        
        if (!is_wp_error($seasons) && !empty($seasons)) :
            
            foreach ($seasons as $season) :
                // Get newsletters for this specific season
                $newsletter_args = array(
                    'post_type' => 'newsletter',
                    'posts_per_page' => -1,
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'season',
                            'field' => 'term_id',
                            'terms' => $season->term_id
                        ),
                        array(
                            'taxonomy' => 'collection',
                            'field' => 'slug',
                            'terms' => get_queried_object()->slug
                        )
                    ),
                    'orderby' => 'date',
                    'order' => 'DESC'
                );
                
                $newsletter_query = new WP_Query($newsletter_args);
                
                if ($newsletter_query->have_posts()) :
                    $start_date = get_field('start_date', 'term_' . $season->term_id);
        ?>
            
            <div class="season-group">
                <h2 class="season-title"><?php echo $season->name; ?></h2>
     
                <div class="newsletter-archive__grid">
                    <?php while ($newsletter_query->have_posts()) : $newsletter_query->the_post(); 
                        $cover = get_field('cover');
                        $edition = get_field('edition');
                        $date = get_field('date');
                    ?>
                        <article class="archive-item">
                            <a href="<?php the_permalink(); ?>" class="archive-item__link">
                                <?php if($cover): ?>
                                    <div class="archive-item__image">
                                        <?php echo wp_get_attachment_image($cover['ID'], 'medium'); ?>
                                    </div>
                                <?php endif; ?>

                                <div class="archive-item__info">
                                    <div class="published">
                                        <span class="published__issue">Issue No. <?php echo $edition; ?></span>
                                        <span class="published__date"><?php echo $date; ?></span>
                                    </div>
                                </div>
                            </a>
                        </article>
                    <?php endwhile; ?>
                </div>
            </div>
            
        <?php 
                endif;
                wp_reset_postdata();
            endforeach;
            
        else :
            // Fallback if no seasons found
            echo '<p>No seasons found.</p>';
        endif;
        ?>
    </section>

<?php get_footer(); ?>