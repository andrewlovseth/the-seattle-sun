<?php

    $args = wp_parse_args($args);

    if(!empty($args)) {
        $message = $args['message']; 
    }
    
?>

<span class="subscribe__message subscribe__message-error fade-in">
    <strong>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0C2.65714 0 0 2.65714 0 6C0 9.34286 2.65714 12 6 12C9.34286 12 12 9.34286 12 6C12 2.65714 9.34286 0 6 0ZM8.31429 9L6 6.68571L3.68571 9L3 8.31429L5.31429 6L3 3.68571L3.68571 3L6 5.31429L8.31429 3L9 3.68571L6.68571 6L9 8.31429L8.31429 9Z" fill="black"/>
        </svg>
        
        <?php if(!empty($message)): ?>
            <span class="subscribe__message-text" title="<?php echo $message; ?>"><?php echo $message; ?></span>
        <?php endif; ?>
    </strong>
</span>