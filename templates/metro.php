<?php


    $edition = get_field('edition');
    $metro_id = $edition->ID;

?>

<div class="issue">
    <?php get_template_part('templates/metro/header'); ?>

    <section class="issue-body content-grid">
        <?php get_template_part('templates/metro/lead', null, ['metro_id' => $metro_id]); ?>

        <?php get_template_part('templates/metro/headlines', null, ['metro_id' => $metro_id]); ?>

        <?php get_template_part('components/dividers/triple-divider'); ?>

        <?php get_template_part('templates/metro/spotlight', null, ['metro_id' => $metro_id]); ?>

        <?php get_template_part('templates/metro/numbers', null, ['metro_id' => $metro_id]); ?>

        <?php get_template_part('components/dividers/single-divider'); ?>

        <?php get_template_part('templates/metro/map', null, ['metro_id' => $metro_id]); ?>

        <?php get_template_part('templates/metro/photos', null, ['metro_id' => $metro_id]); ?>

        <?php get_template_part('components/dividers/single-divider'); ?>

        <?php get_template_part('templates/metro/links', null, ['metro_id' => $metro_id]); ?>

        <?php get_template_part('templates/metro/quote', null, ['metro_id' => $metro_id]); ?>
    </section>
</div>