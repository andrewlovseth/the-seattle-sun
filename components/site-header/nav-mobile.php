<nav class="site-nav mobile-nav">
    <ul class="site-nav__list" role="nav">
 
        <?php if(have_rows('nav_mobile', 'options')): while(have_rows('nav_mobile', 'options')) : the_row(); ?>

            <?php if( get_row_layout() == 'item' ): ?>

                <?php
                    $link = get_sub_field('link');
                    $description = get_sub_field('description');
                ?>

                <li class="site-nav__item">
                    <?php 
                        if( $link ): 
                        $link_url = $link['url'];
                        $link_title = $link['title'];
                        $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                        <a class="site-nav__link" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>">
                            <span class="site-nav__label"><?php echo esc_html($link_title); ?></span>

                            <span class="site-nav__description"><?php echo $description; ?></span>
                        </a>
                    <?php endif; ?>
                </li>

            <?php endif; ?>

        <?php endwhile; endif; ?>

    </ul>

    <div class="site-nav__close">
        <?php get_template_part('src/svg/close'); ?>
    </div>
</nav>