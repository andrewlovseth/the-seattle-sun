<?php
    $headline = get_the_title();
    $content = wp_strip_all_tags(get_post_field('post_content'));
    $primary_category = get_primary_category_name($post->ID);
    $primary_category_id = get_primary_category_id($post->ID);
    $post_thumbnail = get_the_post_thumbnail($post->ID, 'thumbnail', ['class' => 'headline__image']);
?>
<article class="headline<?php if($post_thumbnail): ?> | headline__has-image<?php endif; ?>">
    <?php if($post_thumbnail): ?>
        <div class="headline__image"><?php echo $post_thumbnail; ?></div>
    <?php endif; ?>
    
    <h3 class="headline__title | copy-2">

        <span><strong><?php echo $headline; ?></strong> &mdash; <?php echo $content; ?></span>
    </h3>

    <?php if($primary_category): ?>
        <a href="<?php echo get_term_link($primary_category_id, 'category'); ?>" class="category-badge"><?php echo $primary_category; ?></a>
    <?php endif; ?>
</article>