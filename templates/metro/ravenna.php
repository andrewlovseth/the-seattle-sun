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

        <?php get_template_part('components/dividers/triple-divider'); ?>

        <?php get_template_part('templates/metro/ravenna/spotlight', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/ravenna/numbers', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('components/dividers/single-divider'); ?>

        <?php get_template_part('templates/metro/ravenna/map', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/ravenna/photos', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('components/dividers/single-divider'); ?>

        <?php get_template_part('templates/metro/ravenna/links', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/ravenna/quote', null, ['newsletter_id' => $newsletter_id]); ?>
    </section>
</div>