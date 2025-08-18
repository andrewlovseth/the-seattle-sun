<?php
    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }   

    $lead = get_field('lead', $newsletter_id);


    if($lead):

    $image = get_post_thumbnail_id($lead->ID);
    $credit = get_the_title($image);
    $primary_category = get_primary_category_name($lead->ID);
    $primary_category_id = get_primary_category_id($lead->ID);
    $dek = get_field('dek', $lead->ID);        
?>

    <article class="lead">
        <div class="lead__header">
            <div class="lead__photo">
                <?php if($image): ?>
                    <?php echo wp_get_attachment_image($image, 'full', false, ['class' => 'lead__image']); ?>
                <?php endif; ?>

                <?php if($credit): ?>
                    <p class="lead__photo--credit">Photo: <?php echo $credit; ?></p>
                <?php endif; ?>
            </div>

            <div class="lead__info">
                <?php if($primary_category): ?>
                <a href="<?php echo get_term_link($primary_category_id, 'category'); ?>" class="category-badge"><?php echo $primary_category; ?></a>
                <?php endif; ?>

                <h2 class="lead__headline">
                    <?php echo get_the_title($lead->ID); ?>
                    <a href="<?php echo get_the_permalink($lead->ID); ?>" class="lead__permalink | permalink">
                        <?php get_template_part('src/svg/link'); ?>
                    </a>        
                </h2>

                <?php if($dek): ?>
                    <p class="lead__dek"><?php echo $dek; ?></p>
                <?php endif; ?>
            </div>
        </div>

        <div class="lead__body">
            <div class="lead__copy | copy-2 flow">
                <?php echo apply_filters('the_content', get_post_field('post_content', $lead->ID)); ?>
            </div>
        </div>

        <?php get_template_part('templates/metro/ravenna/subscribe'); ?>
    </article>

<?php endif; ?>