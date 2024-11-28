<?php

$args = wp_parse_args($args);

if(!empty($args)) {
    $newsletter_id = $args['newsletter_id']; 
}

$quote = get_field('quote', $newsletter_id);
$text = get_field('quote', $quote->ID);
$source = get_field('source', $quote->ID);
$caption = get_field('caption', $quote->ID);

?>

<section class="quote">
    <span class="category-badge">Quoted</span>

    <blockquote class="quote__text">
        <?php echo $text; ?>    
    </blockquote>

    <div class="quote__meta">
        <h4 class="quote__source">  
            <?php echo $source; ?>
        </h4>

        <div class="quote__caption">
            <?php echo $caption; ?>
        </div>
    </div>

    <?php get_template_part('components/dividers/triple-divider'); ?>
</section>
