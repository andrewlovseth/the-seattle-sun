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
            $args = ['message' => 'Invalid email address.'];
            get_template_part('components/subscribe/metro/error', null, $args);
            exit;
        }

        if (empty($email_list_id)) {
            header('HTTP/1.1 400 Bad Request');
            $args = ['message' => 'Email list ID is required.'];
            get_template_part('components/subscribe/metro/error', null, $args);
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
            header('HTTP/1.1 500 Internal Server Error');
            $args = ['message' => 'Error checking subscriber. Please try again later.'];
            get_template_part('components/subscribe/metro/error', null, $args);
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
                header('HTTP/1.1 500 Internal Server Error');
                $args = ['message' => 'Error saving subscriber. Please try again later.'];
                get_template_part('components/subscribe/metro/error', null, $args);
                exit;
            }

            $subscriber = json_decode(wp_remote_retrieve_body($response), true);
            $subscriber_id = $subscriber[0]['id'] ?? null;

            if (!$subscriber_id) {
                header('HTTP/1.1 500 Internal Server Error');
                $args = ['message' => 'Failed to create subscriber.'];
                get_template_part('components/subscribe/metro/error', null, $args);
                exit;
            }
        } else {
            // Use existing subscriber's ID
            $subscriber_id = $existing_subscriber[0]['id'] ?? null;
        }

        if (!$subscriber_id) {
            header('HTTP/1.1 500 Internal Server Error');
            $args = ['message' => 'Failed to retrieve subscriber information.'];
            get_template_part('components/subscribe/metro/error', null, $args);
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
            $args = ['message' => 'Error subscribing to the list. Please try again later.'];
            get_template_part('components/subscribe/metro/error', null, $args);
            exit;
        }

        // Success response
        get_template_part('components/subscribe/metro/success');
        exit;

    } catch (Exception $e) {
        header('HTTP/1.1 500 Internal Server Error');
        $args = ['message' => 'Error subscribing to the list. Please try again later.'];
        get_template_part('components/subscribe/metro/error', null, $args);
        exit;
    }
}