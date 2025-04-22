<?php

add_action('wp_ajax_nopriv_subscribe', 'handle_email_subscription');
add_action('wp_ajax_subscribe', 'handle_email_subscription');

function handle_email_subscription() {
    header('Content-Type: application/json');

    try {
        // Log full incoming request for debugging
        error_log('[ConvertKit] Incoming POST: ' . print_r($_POST, true));

        // Validate email
        if (empty($_POST['email'])) {
            wp_send_json_error(['message' => 'Email is required.'], 400);
            return;
        }

        $email = sanitize_email($_POST['email']);
        if (!is_email($email)) {
            wp_send_json_error(['message' => 'Invalid email address.'], 400);
            return;
        }

        // Load ConvertKit personal access token
        $access_token = get_field('kit_key', 'option');

        if (empty($access_token)) {
            wp_send_json_error(['message' => 'Server misconfiguration. Please contact support.'], 500);
            return;
        }

        // Build request body
        $request_body = [
            'email_address' => $email,
            'state' => 'active',
            'fields' => [
                'Last Name' => '',
                'Birthday' => '',
                'Source' => 'website'
            ]
        ];

        // Send API request
        $response = wp_remote_post('https://api.kit.com/v4/subscribers', [
            'headers' => [
                'Content-Type'  => 'application/json',
                'Accept'        => 'application/json',
                'Authorization' => 'Bearer ' . $access_token
            ],
            'body'    => json_encode($request_body),
            'timeout' => 30,
            'sslverify' => true
        ]);

        if (is_wp_error($response)) {
            wp_send_json_error(['message' => 'Unable to connect to the subscription service.'], 500);
            return;
        }

        $status_code = wp_remote_retrieve_response_code($response);
        $body = json_decode(wp_remote_retrieve_body($response), true);

        if ($status_code === 201) {
            wp_send_json_success(['message' => 'Successfully subscribed!']);
        } else {
            // Capture the best possible error message
            $error_message = 'An error occurred.';
            if (isset($body['message'])) {
                $error_message = $body['message'];
            } elseif (isset($body['errors'])) {
                $error_message = json_encode($body['errors']);
            }

            // Log authentication errors specifically
            if ($status_code === 401) {
                error_log('[ConvertKit] Authentication failed. Please verify API token is valid.');
                error_log('[ConvertKit] Token used: ' . substr($access_token, 0, 5) . '...');
            }

            // Include debug data in response
            wp_send_json_error([
                'message' => "Subscription failed.",
                'status_code' => $status_code,
                'error_details' => $error_message,
                'response' => $body
            ], $status_code);
        }

    } catch (Exception $e) {
        wp_send_json_error(['message' => 'Unexpected error. Please try again later.'], 500);
    }
}