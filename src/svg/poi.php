<?php   
    $top = $args['top'];
    $left = $args['left'];
    $headline = $args['headline'];
?>

<div class="poi" style="top: <?php echo $top; ?>%; left: <?php echo $left; ?>%;">
    <svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="27" cy="27" r="27" fill="#CB36E2" fill-opacity="0.25"/>
        <circle cx="27" cy="27" r="18" fill="#CB36E2" fill-opacity="0.4"/>
        <circle cx="27" cy="27" r="6" fill="#CB36E2"/>
        <circle cx="27" cy="27" r="8" stroke="white" stroke-opacity="0.9" stroke-width="4"/>
    </svg>


    <div class="poi__popover" id="<?php echo sanitize_title_with_dashes($headline); ?>">
        <h3 class="poi__headline">
            <?php echo $headline; ?>
        </h3>
    </div>
</div>