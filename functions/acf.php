<?php

/*
    Advanced Custom Fields
*/

// Order Relationship fields
function bearsmith_relationship_order_by_date($args, $field, $post_id) {
    $args['orderby'] = 'date';
    $args['order'] = 'DESC';
    return $args;
}
add_filter('acf/fields/relationship/query', 'bearsmith_relationship_order_by_date', 10, 3);
// Order Post Object fields
function bearsmith_post_object_order_by_date($args, $field, $post_id) {
    $args['orderby'] = 'date';
    $args['order'] = 'DESC';
    return $args;
}
add_filter('acf/fields/post_object/query', 'bearsmith_post_object_order_by_date', 10, 3);


// Custom back-end styles
function bearsmith_acf_styles() {
    ?>

        <style type="text/css">
            .acf-relationship .list {
                height: 400px;
            }
        </style>

    <?php
}
add_action('acf/input/admin_head', 'bearsmith_acf_styles');

// Include Ravenna (Metro) fields in newsletter REST API schema.
// ACF only auto-registers fields from post_type location rules in the REST
// schema. The Ravenna group uses a taxonomy location rule (template:ravenna)
// which ACF skips during schema generation. This filter injects those fields
// so the REST API accepts writes for lead, headlines, spotlight, etc.
add_filter('acf/rest/get_fields', function($fields, $resource, $http_method) {
    if (isset($resource['type']) && $resource['type'] === 'newsletter') {
        $group = acf_get_fields('group_673ec2536851d');
        if ($group) {
            foreach ($group as $field) {
                // Avoid duplicates
                $exists = false;
                foreach ($fields as $f) {
                    if ($f['name'] === $field['name']) {
                        $exists = true;
                        break;
                    }
                }
                if (!$exists) {
                    $fields[] = $field;
                }
            }
        }
    }
    return $fields;
}, 10, 3);