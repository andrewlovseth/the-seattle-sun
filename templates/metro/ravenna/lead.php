<?php
    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }   

    $lead = get_field('lead', $newsletter_id);
    $image = get_post_thumbnail_id($lead->ID);
    $credit = get_post_field('post_content', $image);
    $primary_category = get_primary_category_name($lead->ID);
    $dek = get_field('dek', $lead->ID);

?>

<article class="lead">
    <div class="lead__header">
        <div class="lead__photo">
            <?php if($image): ?>
                <?php echo wp_get_attachment_image($image, 'full', false, ['class' => 'lead__image']); ?>
            <?php endif; ?>

            <?php if($credit): ?>
                <p class="lead__photo--credit"><?php echo $credit; ?></p>
            <?php endif; ?>
        </div>

        <div class="lead__info">
            <?php if($primary_category): ?>
                <span class="category-badge"><?php echo $primary_category; ?></span>
            <?php endif; ?>

            <h2 class="lead__headline"><?php echo get_the_title($lead->ID); ?></h2>

            <?php if($dek): ?>
                <p class="lead__dek"><?php echo $dek; ?></p>
            <?php endif; ?>
        </div>
    </div>

    <div class="lead__body">
        <div class="lead__copy | copy-2 flow">
            <?php echo get_post_field('post_content', $lead->ID); ?>
        </div>
    </div>

    <?php get_template_part('components/subscribe/metro/add-form'); ?>
</article>