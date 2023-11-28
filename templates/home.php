<?php

/*

    Template Name: Home

*/

get_header(); ?>

    <?php
        $edition = get_field('edition');
        $args = ['edition' => $edition->ID];
        get_template_part('templates/metro', null, $args);
    ?>

<?php get_footer(); ?>