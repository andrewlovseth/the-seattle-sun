<?php

/*

    Template Name: Contact

*/

get_header(); ?>


    <section class="contact-page | content-grid">
        <h1 class="page-title"><?php the_title(); ?></h1>

        <?php if ( have_posts() ): while ( have_posts() ): the_post(); ?>

            <div class="contact-page__content | copy-2">
                <?php the_content(); ?>
            </div>
            
        <?php endwhile; endif; ?>
        

    </section>


<?php get_footer(); ?>