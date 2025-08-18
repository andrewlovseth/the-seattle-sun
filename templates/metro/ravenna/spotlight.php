<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }

    $spotlight = get_field('spotlight', $newsletter_id);
    if( $spotlight ):
?>

    <section class="spotlight">
        <?php foreach( $spotlight as $p ): ?>
            <article class="spotlight__article">
                <div class="spotlight__header">
                    <div class="spotlight__photo">
                        <?php echo get_the_post_thumbnail( $p->ID, 'medium', ['class' => 'spotlight__image'] ); ?>
                    </div>

                    <div class="spotlight__info">
                        <?php
                            $primary_category = get_primary_category_name($p->ID);
                            $primary_category_id = get_primary_category_id($p->ID);
                            if($primary_category): ?>
                            <a href="<?php echo get_term_link($primary_category_id, 'category'); ?>" class="category-badge"><?php echo $primary_category; ?></a>
                        <?php endif; ?>

                        <h3 class="spotlight__headline">
                            <?php echo get_the_title( $p->ID ); ?>
                            <a href="<?php echo get_the_permalink($p->ID); ?>" class="spotlight__permalink | permalink">
                                <?php get_template_part('src/svg/link'); ?>
                            </a>
                        </h3>
                    </div>
                </div>

                <div class="spotlight__body | copy-2 flow">
                    <?php echo apply_filters('the_content', get_post_field('post_content', $p->ID)); ?>
                </div>
            </article>
        <?php endforeach; ?>
</section>

<?php endif; ?>