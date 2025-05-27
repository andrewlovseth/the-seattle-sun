<?php
    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
        $collection_id = $args['collection_id'];
        $template_id = $args['template_id'];
    }

    $cover = get_field('cover', $newsletter_id);
?>

<header class="issue-header | content-grid">
    <?php get_template_part('components/dividers/top-divider'); ?>

    <div class="issue-header__grid">
        <?php get_template_part('components/issue-header/nameplate'); ?>

        <div class="edition">
            <a class="edition__name" href="<?php echo get_term_link($collection_id); ?>"><?php echo get_term($collection_id)->name; ?></a>
            <span class="edition__tagline"><?php echo get_term($collection_id)->description; ?></span>
        </div>

        <div class="published">
            <div class="published__info">
                <span class="published__issue">Issue No. <?php echo get_field('edition', $newsletter_id); ?></span>
                <a class="published__date" href="<?php echo get_the_permalink($newsletter_id); ?>"><?php echo get_field('date', $newsletter_id); ?></a>
            </div>

            <?php if($cover): ?>
                <div class="published__cover">
                    <a data-fslightbox="cover" href="<?php echo wp_get_attachment_image_url($cover['ID'], 'full'); ?>">
                        <?php echo wp_get_attachment_image($cover['ID'], 'medium'); ?>
                    </a>
                </div>
            <?php endif; ?>
        </div>
    </div>

    <?php get_template_part('components/dividers/bottom-divider'); ?>
</header>