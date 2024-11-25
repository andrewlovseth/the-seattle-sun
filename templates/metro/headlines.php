<?php
    if(!empty($args)) {
        $metro_id = $args['metro_id']; 
    }

    $headlines = get_field('headlines', $metro_id);

?>

<section class="headlines">
    <?php get_template_part('components/headers/section', null, ['title' => 'Headlines']); ?>

    <div class="headlines__list">
        <?php foreach($headlines as $h): ?>     
            <?php
                $headline = get_the_title($h->ID);
                $content = wp_strip_all_tags(get_post_field('post_content', $h->ID));
                $primary_category = get_primary_category_name($h->ID);
                $post_thumbnail = get_the_post_thumbnail($h->ID, 'thumbnail', ['class' => 'headline__image']);
            ?>
            <article class="headline">


                <h3 class="headline__title | copy-2<?php if($post_thumbnail): ?> | headline__title--has-image<?php endif; ?>">
                    <?php if($post_thumbnail): ?>
                        <div class="headline__image"><?php echo $post_thumbnail; ?></div>
                    <?php endif; ?>

                    <span><strong><?php echo $headline; ?></strong> &mdash; <?php echo $content; ?></span>
                </h3>

                <?php if($primary_category): ?>
                    <span class="category-badge"><?php echo $primary_category; ?></span>
                <?php endif; ?>
            </article>
        <?php endforeach; ?>

    </div>
</section>