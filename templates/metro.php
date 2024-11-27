<?php


    $edition = get_field('edition');
    $newsletter_id = $edition->ID;

?>

<div class="issue">
    <?php get_template_part('templates/metro/header'); ?>

    <section class="issue-body content-grid">
        <?php get_template_part('templates/metro/lead', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/headlines', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('components/dividers/triple-divider'); ?>

        <?php get_template_part('templates/metro/spotlight', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/numbers', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('components/dividers/single-divider'); ?>

        <?php get_template_part('templates/metro/map', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/photos', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('components/dividers/single-divider'); ?>

        <?php get_template_part('templates/metro/links', null, ['newsletter_id' => $newsletter_id]); ?>

        <?php get_template_part('templates/metro/quote', null, ['newsletter_id' => $newsletter_id]); ?>
    </section>
</div>