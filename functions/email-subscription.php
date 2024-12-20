<?php

add_action('wp_ajax_nopriv_subscribe', 'handle_email_subscription');
add_action('wp_ajax_subscribe', 'handle_email_subscription');

function handle_email_subscription() {
    try {
        // Input validation
        $email = sanitize_email($_POST['email']);
        $email_list_id = sanitize_text_field($_POST['email_list_id']);

        if (!is_email($email)) {
            header('HTTP/1.1 400 Bad Request');
            get_template_part('components/subscribe/metro/error-400-invalid-email');
            exit;
        }

        if (empty($email_list_id)) {
            header('HTTP/1.1 400 Bad Request');
            get_template_part('components/subscribe/metro/error-400-email-list-id');
            exit;
        }

        // Get Supabase credentials
        $supabase_url = get_field('supabase_url', 'option');
        $supabase_key = get_field('supabase_key', 'option');


        // Step 1: First try to get the existing subscriber
        $response = wp_remote_get("$supabase_url/rest/v1/email_subscribers?email=eq.$email&select=id", array(
            'headers' => array(
                'Authorization' => "Bearer $supabase_key",
                'apikey' => $supabase_key,
                'Content-Type' => 'application/json'
            )
        ));

        if (is_wp_error($response)) {
            error_log('Supabase error: ' . $response->get_error_message());
            header('HTTP/1.1 500 Internal Server Error');
            get_template_part('components/subscribe/metro/error-500-checking-subscriber');
            exit;
        }

        $existing_subscriber = json_decode(wp_remote_retrieve_body($response), true);

        if (empty($existing_subscriber)) {
            // If subscriber doesn't exist, create new one
            $response = wp_remote_post("$supabase_url/rest/v1/email_subscribers", array(
                'headers' => array(
                    'Authorization' => "Bearer $supabase_key",
                    'apikey' => $supabase_key,
                    'Content-Type' => 'application/json',
                    'Prefer' => 'return=representation'
                ),
                'body' => json_encode(array(
                    'email' => $email,
                    'status' => 'active'
                )),
            ));

            if (is_wp_error($response)) {
                error_log('Supabase error: ' . $response->get_error_message());
                header('HTTP/1.1 500 Internal Server Error');
                get_template_part('components/subscribe/metro/error-500-saving-subscriber');
                exit;
            }

            $subscriber = json_decode(wp_remote_retrieve_body($response), true);
            error_log('New subscriber response: ' . print_r($subscriber, true));
            $subscriber_id = $subscriber[0]['id'] ?? null;

            if (!$subscriber_id) {
                error_log('Failed to get subscriber ID from response: ' . print_r($subscriber, true));
                header('HTTP/1.1 500 Internal Server Error');
                get_template_part('components/subscribe/metro/error-500-creating-subscriber');
                exit;
            }
        } else {
            // Use existing subscriber's ID
            $subscriber_id = $existing_subscriber[0]['id'] ?? null;
        }

        if (!$subscriber_id) {
            header('HTTP/1.1 500 Internal Server Error');
            get_template_part('components/subscribe/metro/error-500-retrieving-subscriber-info');
            exit;
        }

        // Step 2: Subscribe the user to the selected email list
        $response = wp_remote_post("$supabase_url/rest/v1/email_list_subscribers", array(
            'headers' => array(
                'Authorization' => "Bearer $supabase_key",
                'apikey' => $supabase_key,
                'Content-Type' => 'application/json',
            ),
            'body' => json_encode(array(
                'email_list_id' => $email_list_id,
                'subscriber_id' => $subscriber_id
            )),
        ));

        if (is_wp_error($response)) {
            header('HTTP/1.1 500 Internal Server Error');
            get_template_part('components/subscribe/metro/error-500-subscribing-to-list');
            exit;
        }
        error_log('Supabase response: ' . print_r($response, true));

        // Success response
        get_template_part('components/subscribe/metro/success');
        exit;

    } catch (Exception $e) {
        error_log('Subscription error: ' . $e->getMessage());
        header('HTTP/1.1 500 Internal Server Error');
        get_template_part('components/subscribe/metro/error-500-exception');
        exit;
    }
}