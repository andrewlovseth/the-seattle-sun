<?php
    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
        $home_prev_post = $args['home_prev_post'];
        $home_next_post = $args['home_next_post'];
    }

    if($home_prev_post) {
        $prev_post = $home_prev_post;
    } else {
        $prev_post = get_adjacent_post(true, '', true, 'collection');
    }

    if($home_next_post) {
        $next_post = $home_next_post;
    } else {
        $next_post = get_adjacent_post(true, '', false, 'collection');
    }

    if ($prev_post || $next_post) : ?>
    
    <section class="newsletter-pagination">
        <div class="newsletter-pagination__item | prev">
            <?php if ($prev_post) : 
                $prev_cover = get_field('cover', $prev_post->ID);
                $prev_date = get_field('date', $prev_post->ID);
                $prev_edition = get_field('edition', $prev_post->ID);
                $prev_title = get_the_title($prev_post->ID);
                $prev_collections = get_the_terms($prev_post->ID, 'collection');
                $prev_collection = !empty($prev_collections) ? $prev_collections[0] : null;
            ?>

                <a href="<?php echo get_permalink($prev_post->ID); ?>" class="newsletter-pagination__link">
                    <?php if($prev_cover): ?>
                        <div class="newsletter-pagination__image">
                            <?php echo wp_get_attachment_image($prev_cover['ID'], 'full'); ?>
                        </div>
                    <?php endif; ?>
                    <div class="newsletter-pagination__info">
                        <h5 class="newsletter-pagination__header">&larr; Previous</h5>

                        <div class="published">
                            <span class="published__issue">Issue No. <?php echo $prev_edition; ?></span>
                            <span class="published__date"><?php echo $prev_date; ?></span>
                        </div>
                    </div>
                </a>
                
            <?php endif; ?>
        </div>

        <div class="newsletter-pagination__item | next">
            <?php if ($next_post) : 
                $next_cover = get_field('cover', $next_post->ID);
                $next_date = get_field('date', $next_post->ID);
                $next_edition = get_field('edition', $next_post->ID);
            ?>
            
                <a href="<?php echo get_permalink($next_post->ID); ?>" class="newsletter-pagination__link">
                    <div class="newsletter-pagination__info">
                        <h5 class="newsletter-pagination__header">Next &rarr;</h5>
                        <div class="published">
                            <span class="published__issue">Issue No. <?php echo $next_edition; ?></span>
                            <span class="published__date"><?php echo $next_date; ?></span>
                        </div>
                    </div>

                    <?php if($next_cover): ?>
                        <div class="newsletter-pagination__image">
                            <?php echo wp_get_attachment_image($next_cover['ID'], 'full'); ?>
                        </div>
                    <?php endif; ?>
                </a>            
            <?php endif; ?>
        </div>
    </section>
<?php endif; ?>


