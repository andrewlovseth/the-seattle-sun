<?php
    $headline = get_the_title();
    $content = wp_strip_all_tags(get_post_field('post_content'));
    $post_thumbnail = get_the_post_thumbnail($post->ID, 'thumbnail', ['class' => 'archive__image']);
?>
<article class="archive archive__headline">

    <p class="archive__date"><?php echo get_the_date(); ?></p>


    <h3 class="headline__title | copy-2<?php if($post_thumbnail): ?> | headline__title--has-image<?php endif; ?>">
        <?php if($post_thumbnail): ?>
            <div class="headline__image"><?php echo $post_thumbnail; ?></div>
        <?php endif; ?>

        <span><strong><?php echo $headline; ?></strong> &mdash; <?php echo $content; ?></span>

        <a href="<?php echo get_the_permalink($post->ID); ?>" class="headline__permalink | permalink">
            <?php get_template_part('src/svg/link'); ?>
        </a>  
    </h3>
</article>