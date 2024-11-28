<?php
    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
        $collection_id = $args['collection_id'];
        $template_id = $args['template_id'];
    }
?>

<header class="issue-header | content-grid">
    <?php get_template_part('components/dividers/top-divider'); ?>

    <div class="issue-header__grid">
        <?php get_template_part('components/issue-header/nameplate'); ?>

        <div class="edition">
            <span class="edition__name"><?php echo get_term($collection_id)->name; ?></span>
            <span class="edition__tagline"><?php echo get_term($collection_id)->description; ?></span>
        </div>

        <div class="published">
            <span class="published__issue">Issue No. <?php echo get_field('edition', $newsletter_id); ?></span>
            <span class="published__date"><?php echo get_field('date', $newsletter_id); ?></span>
        </div>
    </div>

    <?php get_template_part('components/dividers/bottom-divider'); ?>
</header>