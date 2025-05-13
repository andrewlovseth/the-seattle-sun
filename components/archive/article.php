<?php

    $image = get_post_thumbnail_id();
    $credit = get_post_field('post_content', $image);
    $primary_category = get_primary_category_name($post->ID);
    $dek = get_field('dek');

?>

<article class="archive archive__article">
    <div class="archive__header">
        <div class="archive__photo">
            <?php if($image): ?>
                <?php echo wp_get_attachment_image($image, 'medium', false, ['class' => 'archive__image']); ?>
            <?php endif; ?>

            <?php if($credit): ?>
                <p class="archive__photo--credit"><?php echo $credit; ?></p>
            <?php endif; ?>
        </div>
        
        <div class="archive__info">
            <p class="archive__date"><?php echo get_the_date(); ?></p>

            <h2 class="archive__headline">
                <a href="<?php the_permalink(); ?>"><?php echo get_the_title(); ?></a>
            </h2>

            <?php if($dek): ?>
                <p class="archive__dek"><?php echo $dek; ?></p>
            <?php endif; ?>
        </div>


    </div>

    <div class="archive__body">
        <div class="archive__copy | copy-3 flow">
            <p>
                <?php 
                    $content = wp_strip_all_tags(get_the_content());
                    echo substr($content, 0, 300) . (strlen($content) > 300 ? '...' : '');
                ?>
                <a href="<?php echo get_the_permalink($post->ID); ?>" class="archive-article__permalink | permalink">
                    <?php get_template_part('src/svg/link'); ?>
                </a>  
            </p>
        </div>
    </div>
</article>