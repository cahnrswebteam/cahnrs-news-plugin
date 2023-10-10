<?php namespace CAHNRS\Plugin\News;

class Plugin {

	public static function get( $property ) {

		switch ( $property ) {

			case 'dir':
				return plugin_dir_path( dirname( __FILE__ ) );

			default:
				return '';

		}

	}

    public static function setup_classes() {

	}


	public static function init() {

		self::setup_classes();

		// Do plugin stuff here

		require_once __DIR__ . '/scripts.php';
		require_once __DIR__ . '/blocks.php';
		require_once __DIR__ . '/functions.php';
        require_once __DIR__ . '/../lib/post-status/post-status.php';
        require_once __DIR__ . '/../lib/cron/archive-cron.php';
		require_once __DIR__ . '/../lib/main-query/main-query.php';
		require_once __DIR__ . '/../lib/shortcodes/shortcodes.php';

	}
}

Plugin::init();
