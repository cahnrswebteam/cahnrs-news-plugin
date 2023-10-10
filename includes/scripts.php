<?php namespace CAHNRS\Plugin\News;

class Scripts {

    public static function setup_classes() {

		// Load any of the /classes/... used
	}

    public static function init() {

		self::setup_classes();

        add_action( 'enqueue_block_editor_assets', array( __CLASS__, 'enqueue_block_editor_assets' ) );
        
        add_action('wp_enqueue_scripts', array( __CLASS__, 'enqueue_styles_scripts'));
        
		add_action( 'admin_enqueue_scripts', array( __CLASS__, 'admin_enqueue_scripts' ), 5 );

        add_action('wp_footer', array( __CLASS__, 'footer_enqueue_scripts' )); 

	}

    public static function enqueue_block_editor_assets() {
        // Make paths variables
        $block_path = '/assets/js/cahnrs-gutenberg-blocks.js';
        $style_path = '/assets/css/blocks.editor.css';

        // Enqueue optional editor-only styles
        wp_enqueue_style( 'cahnrs-news-plugin/assets/block-editor/css/blocks-editor-css', _get_cahnrs_news_plugin_url() . $style_path, [], null);

        // Enqueue the bundled block JS file
        wp_enqueue_script('cahnrs-news-plugin/assets/js/blocks-js', _get_cahnrs_news_plugin_url() . $block_path, ['wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor'], null );
    }

    public static function enqueue_styles_scripts(){
        wp_enqueue_script( 'bootstrap5-script', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js', array() );
        wp_register_style( 'cahnrs-news-plugin-css', 	_get_cahnrs_news_plugin_url() . '/assets/css/style.css' , false );
        wp_enqueue_style ( 'cahnrs-news-plugin-css' );
    }

    public static function admin_enqueue_scripts(){
        $plugin_url = plugin_dir_url( __DIR__ );
        wp_enqueue_style( 'admin_css', $plugin_url . 'assets/admin/css/admin-styles.min.css', false );
        wp_enqueue_script( 'custom-script', $plugin_url . 'assets/admin/js/admin-scripts.min.js', array( 'jquery' ) );
    }

    public static function footer_enqueue_scripts(){
        wp_enqueue_script( 'cahnrs-news-js', _get_cahnrs_news_plugin_url() . '/assets/public/js/scripts.min.js' , array('jquery') );
    }

	  
}

Scripts::init();