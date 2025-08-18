<?php

$args = wp_parse_args($args);

if(!empty($args)) {
    $block = $args['block']; 
}

$race = get_field('race');
$results = get_field('results');
$total_votes = get_field('total_votes');
$election_date = get_field('date'); // Get date from main block, not repeater

if( $race && $results ):
    
    $sum_votes = (is_numeric($total_votes) && $total_votes > 0)
        ? (int) $total_votes
        : array_reduce($results, fn($c, $r) => $c + (int) ($r['votes'] ?? 0), 0);
    
    $sum_votes = max(1, (int) $sum_votes); // prevent divide-by-zero
    
    $anchor = !empty($block['anchor']) ? sanitize_title($block['anchor']) : sanitize_title($race);
?>

    <section class="election-results" aria-labelledby="<?php echo esc_attr($anchor); ?>-title">
        <div id="<?php echo esc_attr($anchor); ?>-title" class="election-results__title">
            <span class="election-results__title-race"><?php echo esc_html($race); ?></span>

            <?php if ($election_date): ?>
                <span class="election-results__title-date"><?php 
                    // ACF date picker returns Y-m-d format, so we can format it directly
                    $date_obj = DateTime::createFromFormat('Y-m-d', $election_date);
                    if ($date_obj) {
                        echo esc_html($date_obj->format('F j, Y')); 
                    } else {
                        echo esc_html($election_date); // Fallback to raw value
                    }
                ?></span>
            <?php endif; ?>            
        </div>

        <div class="election-results__body">
            <div class="election-results__headers">
                <div class="election-results__header election-results__header--candidate">Candidate</div>
                <div class="election-results__header election-results__header--votes">Votes</div>
                <div class="election-results__header election-results__header--pct">Pct.</div>
            </div>

            <div class="election-results__list">

                <?php if(have_rows('results')): while(have_rows('results')) : the_row(); ?>

                    <?php
                        $candidate_name = get_sub_field('candidate_name');
                        $votes = get_sub_field('votes');
                        $winner = get_sub_field('winner');
                        $color = get_sub_field('color');
                        $pct = round(($votes / $sum_votes) * 100, 1);
                    ?>

                    <article class="election-result" data-votes="<?php echo esc_attr($votes); ?>" data-percent="<?php echo esc_attr($pct); ?>" style="border-left-color: <?php echo esc_attr($color); ?>">
                        
                        <div class="election-result__header">
                            <h4 class="election-result__name">
                                <?php echo esc_html($candidate_name); ?>
                    
                                <?php if ($winner): ?>
                                    <span class="election-result__winner-flag" aria-label="<?php esc_attr_e('Winner','election-results-block'); ?>">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 18C10.1819 18 11.3522 17.7672 12.4442 17.3149C13.5361 16.8626 14.5282 16.1997 15.364 15.364C16.1997 14.5282 16.8626 13.5361 17.3149 12.4442C17.7672 11.3522 18 10.1819 18 9C18 7.8181 17.7672 6.64778 17.3149 5.55585C16.8626 4.46392 16.1997 3.47177 15.364 2.63604C14.5282 1.80031 13.5361 1.13738 12.4442 0.685084C11.3522 0.232792 10.1819 -1.76116e-08 9 0C6.61305 3.55683e-08 4.32387 0.948211 2.63604 2.63604C0.948212 4.32387 0 6.61305 0 9C0 11.3869 0.948212 13.6761 2.63604 15.364C4.32387 17.0518 6.61305 18 9 18ZM8.768 12.64L13.768 6.64L12.232 5.36L7.932 10.519L5.707 8.293L4.293 9.707L7.293 12.707L8.067 13.481L8.768 12.64Z"/>
                                        </svg>
                                    </span>
                                <?php endif; ?>
                            </h4>
                        </div>

                        <div class="election-result__votes">
                            <?php echo esc_html(number_format_i18n($votes)); ?>
                        </div>

                        <div class="election-result__percentage">
                            <div class="election-result__percentage-number"><?php echo esc_html($pct); ?><?php echo get_row_index() === 1 ? '%' : ''; ?></div>
                            <div class="election-result__progress-bar-wrapper">
                                <div class="election-result__progress-bar" style="width: <?php echo esc_attr($pct); ?>%; background-color: <?php echo esc_attr($color); ?>"></div>
                            </div>
                        </div>
                    </article>

                <?php endwhile; endif; ?>

            </div>

            <div class="election-results__total">
                <span class="election-results__total-label">Total reported</span>
                <span class="election-results__total-votes"><?php echo esc_html(number_format_i18n($sum_votes)); ?></span>
                <span></span>
            </div>
        </div>

        


    </section>

<?php endif; ?>
