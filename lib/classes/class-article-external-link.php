<?php namespace CAHNRS\Plugin\News;

class CAHNRS_Redirect_Handler {
    public function __construct() {
        add_filter('template_include', array($this, 'check_redirect'));
        add_action('init', array($this, 'register_external_link_meta'));
    }

    public function check_redirect($template) {
        if (is_singular()) {
            global $post;

            $redirect_url = get_post_meta(get_the_ID(), '_article_redirect_url', true);

            if (empty($redirect_url)) {
                $redirect_url = get_post_meta($post->ID, '_redirect_url', true);
            }

            if (!empty($redirect_url)) {
                wp_redirect($redirect_url);
                exit;
            }
        }

        return $template;
    }

    public function register_external_link_meta() {
        register_post_meta('article', '_article_redirect_url', array(
            'type'         => 'string',
            'single'       => true,
            'show_in_rest' => true,
            'auth_callback' => function() {
                return current_user_can('edit_posts');
            }
        ));

    }
}

new CAHNRS_Redirect_Handler();

?>