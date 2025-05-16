<?php

/*

    Template: Metro - Ravenna
    Version: 0.1

*/

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id'];
        $collection_id = $args['collection_id'];
        $template_id = $args['template_id'];
        $home_prev_post = $args['home_prev_post'];
        $home_next_post = $args['home_next_post'];
    }   
?>

<div class="issue newsletter-metro template-ravenna">
    <?php
        $args = [
            'newsletter_id' => $newsletter_id,
            'collection_id' => $collection_id,
            'template_id' => $template_id
        ];
        get_template_part('components/newsletter/header', null, $args);
    ?>

    <section class="issue-body content-grid">
        <?php get_template_part('templates/metro/ravenna/lead', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/ravenna/headlines', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php if(get_field('headlines', $newsletter_id) || get_field('lead', $newsletter_id)): ?>
            <?php get_template_part('components/dividers/triple-divider'); ?>
        <?php endif; ?>

        <?php get_template_part('templates/metro/ravenna/spotlight', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/ravenna/numbers', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php if(get_field('numbers', $newsletter_id)): ?>
            <?php get_template_part('components/dividers/single-divider'); ?>
        <?php endif; ?>

        <?php get_template_part('templates/metro/ravenna/map', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/ravenna/photos', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php if(get_field('photos', $newsletter_id)): ?>
            <?php get_template_part('components/dividers/single-divider'); ?>
        <?php endif; ?>

        <?php get_template_part('templates/metro/ravenna/links', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/ravenna/quote', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/ravenna/pagination', null, ['newsletter_id' => $newsletter_id, 'home_prev_post' => $home_prev_post, 'home_next_post' => $home_next_post]); ?>
    </section>
</div>