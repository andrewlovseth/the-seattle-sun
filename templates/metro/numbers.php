<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $metro_id = $args['metro_id']; 
    }

    $by_the_numbers = get_field('by_the_numbers', $metro_id);
    $numbers = get_field('numbers', $by_the_numbers->ID);
    if( $numbers ):
?>

    <section class="numbers">
        <?php get_template_part('components/headers/section', null, ['title' => 'By the Numbers']); ?>

        <div class="numbers__list">

            <?php if(have_rows('numbers', $by_the_numbers->ID)): while(have_rows('numbers', $by_the_numbers->ID)) : the_row(); ?>

                <?php if( get_row_layout() == 'number' ): ?>

                    <?php
                        $headline = get_sub_field('headline');
                        $sub_headline = get_sub_field('sub_headline');
                        $copy = get_sub_field('copy');
                    ?>

                    <article class="number">
                        <div class="number__header">
                            <h3 class="number__stat"><?php echo $headline; ?></h3>
                            <p class="number__label"><?php echo $sub_headline; ?></p>
                        </div>

                        <div class="number__copy | copy-2">
                            <?php echo $copy; ?>
                        </div>
                    </article>

                <?php endif; ?>

            <?php endwhile; endif; ?>

        </div>
    </section>

<?php endif; ?>