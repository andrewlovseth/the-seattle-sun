<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $newsletter_id = $args['newsletter_id']; 
    }

    $on_the_web = get_field('on_the_web', $newsletter_id);
    $links = get_field('links', $on_the_web->ID);
    if( $links ):
?>

    <section class="links">
        <?php get_template_part('components/headers/section', null, ['title' => 'On the Web']); ?>

        <div class="links__list">

            <?php while(have_rows('links', $on_the_web->ID)) : the_row(); ?>

                <?php if( get_row_layout() == 'link' ): ?>

                    <?php
                        $headline = get_sub_field('headline');
                        $url = get_sub_field('url');
                        $source = get_sub_field('source');
                        $icon = get_sub_field('icon');
                    ?>

                    <article class="link">
                        <div class="link__icon">
                            <a href="<?php echo $url; ?>" target="_blank">
                                <?php echo wp_get_attachment_image($icon['ID'], 'full'); ?>
                            </a>
                        </div>

                        <div class="link__content">
                            <h3 class="link__headline | copy-2">
                                <a href="<?php echo $url; ?>" class="link__main" target="_blank">
                                    <span class="link__headline-text"><?php echo $headline; ?></span>
                                    <span class="link__source"><?php echo $source; ?></span>
                                </a>
                            </h3>
                            
                        </div>
                    </article>

                <?php endif; ?>

            <?php endwhile; ?>

        </div>
    </section>

<?php endif; ?>