<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $title = $args['title']; 
    }
    
?>

<div class="section-header">
    <?php get_template_part('components/dividers/top-divider'); ?>

    <h2 class="section-title"><?php echo $title; ?></h2>

    <?php get_template_part('components/dividers/bottom-divider'); ?>
</div>