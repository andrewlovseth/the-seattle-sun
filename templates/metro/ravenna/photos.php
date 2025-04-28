<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }

    $photos = get_field('photos', $newsletter_id);
    $gallery = get_field('gallery', $photos->ID);
    if( $gallery ):
?>

    <section class="photos">
        <?php get_template_part('components/headers/section', null, ['title' => 'Photos']); ?>

        <div class="photos__grid">
            <?php foreach( $gallery as $photo ): ?>
                <div class="photos__item">
                    <a data-fslightbox data-caption="<div class='photos__caption | copy-4'><?php echo $photo['caption']; ?> <span class='photos__credit'><?php echo $photo['title']; ?></span></div>" href="<?php echo wp_get_attachment_image_url($photo['ID'], 'full'); ?>" class="photos__link">
                        <?php echo wp_get_attachment_image($photo['ID'], 'medium'); ?>
                    </a>
                </div>
            <?php endforeach; ?>
        </div>
    </section>

<?php endif; ?>