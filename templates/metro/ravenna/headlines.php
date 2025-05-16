<?php
    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }

    $headlines = get_field('headlines', $newsletter_id);

    if($headlines):

?>

    <section class="headlines">
        <?php get_template_part('components/headers/section', null, ['title' => 'Headlines']); ?>

        <div class="headlines__list">
            <?php foreach($headlines as $h): ?>     
                <?php
                    $headline = get_the_title($h->ID);
                    $content = wp_strip_all_tags(get_post_field('post_content', $h->ID));
                    $primary_category = get_primary_category_name($h->ID);
                    $primary_category_id = get_primary_category_id($h->ID);
                    $post_thumbnail = get_the_post_thumbnail($h->ID, 'thumbnail', ['class' => 'headline__image']);
                ?>
                <article class="headline<?php if($post_thumbnail): ?> | headline__has-image<?php endif; ?>">
                    <?php if($post_thumbnail): ?>
                        <div class="headline__image"><?php echo $post_thumbnail; ?></div>
                    <?php endif; ?>

                    <h3 class="headline__title | copy-2">
                        <span><strong><?php echo $headline; ?></strong> &mdash; <?php echo $content; ?></span>

                        <a href="<?php echo get_the_permalink($h->ID); ?>" class="headline__permalink | permalink">
                            <?php get_template_part('src/svg/link'); ?>
                        </a>  
                    </h3>

                    <?php if($primary_category): ?>
                        <a href="<?php echo get_term_link($primary_category_id, 'category'); ?>" class="category-badge"><?php echo $primary_category; ?></a>
                    <?php endif; ?>
                </article>
            <?php endforeach; ?>

        </div>
    </section>

<?php endif; ?>