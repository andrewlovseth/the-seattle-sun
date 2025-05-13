<?php

    $image = get_post_thumbnail_id();
    $credit = get_post_field('post_content', $image);
    $primary_category = get_primary_category_name($post->ID);
    $primary_category_id = get_primary_category_id($post->ID);
    $dek = get_field('dek');

?>

<article class="lead">
    <div class="lead__header">
        <div class="lead__info">
            <?php if($primary_category): ?>
                <a href="<?php echo get_term_link($primary_category_id, 'category'); ?>" class="category-badge"><?php echo $primary_category; ?></a>
            <?php endif; ?>

            <h2 class="lead__headline"><?php echo get_the_title(); ?></h2>

            <?php if($dek): ?>
                <p class="lead__dek"><?php echo $dek; ?></p>
            <?php endif; ?>
        </div>

        <div class="lead__photo">
            <?php if($image): ?>
                <?php echo wp_get_attachment_image($image, 'full', false, ['class' => 'lead__image']); ?>
            <?php endif; ?>

            <?php if($credit): ?>
                <p class="lead__photo--credit"><?php echo $credit; ?></p>
            <?php endif; ?>
        </div>

        <div class="lead__meta">
            <p class="lead__author">
                <?php echo get_avatar( get_the_author_meta('ID'), 24, '', get_the_author(), ['class' => 'lead__author-avatar'] ); ?>
                <span class="lead__author-label">By <?php the_author(); ?></span>
                
            </p>
            <p class="lead__date"><?php echo get_the_date(); ?></p>
        </div>
    </div>

    <div class="lead__body">
        <div class="lead__copy | copy-2 flow">
            <?php the_content(); ?>
        </div>
    </div>
</article>