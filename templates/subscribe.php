<?php

/*

    Template Name: Subscribe

*/

get_header(); ?>


    <section class="subscribe-landing-page | content-grid">
        <h1 class="page-title"><?php the_title(); ?></h1>

        <?php if ( have_posts() ): while ( have_posts() ): the_post(); ?>

            <div class="subscribe-landing-page__content | copy-2">
                <?php the_content(); ?>
            </div>
            
        <?php endwhile; endif; ?>
        
        <?php get_template_part('components/subscribe/metro/form'); ?>

    </section>

<?php get_footer(); ?>