<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $metro_id = $args['metro_id']; 
    }

    $spotlight = get_field('spotlight', $metro_id);
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
                        <?php $primary_category = get_primary_category_name($p->ID); if($primary_category): ?>
                                <span class="category-badge"><?php echo $primary_category; ?></span>
                        <?php endif; ?>

                        <h3 class="spotlight__headline"><?php echo get_the_title( $p->ID ); ?></h3>
                    </div>
                </div>

                <div class="spotlight__body | copy-2 flow">
                    <?php echo get_post_field('post_content', $p->ID); ?>
                </div>
            </article>
        <?php endforeach; ?>
</section>

<?php endif; ?>