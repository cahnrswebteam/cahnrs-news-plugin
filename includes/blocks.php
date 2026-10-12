<?php  namespace CAHNRS\Plugin\News;

class Register_CAHNRS_News_Blocks {
	protected static $block_names   = array(
        'cahnrs/video-list',
		'cahnrs/archive-search',
		'cahnrs/on-solid-ground',
		'cahnrs/voice-of-the-vine',
		'cahnrs/extension-newsletter',
		'cahnrs/author-information',
		'cahnrs/retail-cut',
    );

	protected static $register_blocks = array(
		'cahnrs/video-list'   			=> 'Block_WSUWP_Video_List',
		'cahnrs/archive-search'   		=> 'Block_WSUWP_Search_Archive',
		'cahnrs/on-solid-ground'   		=> 'Block_WSUWP_On_Solid_Ground',
		'cahnrs/voice-of-the-vine'   	=> 'Block_WSUWP_Voice_of_the_Vine',
		'cahnrs/extension-newsletter'   => 'Block_WSUWP_Extension_Newsletter',
		'cahnrs/author-information'   	=> 'Block_WSUWP_CAHNRS_Author_Information',
	);

	public static function register_block()
    {
        
		// Get blocks to register
		$blocks = self::$register_blocks;

		// Get the block directory
		$block_dir = Plugin::get( 'dir' ) . 'blocks/';

		foreach ( $blocks as $block => $class ) {

			// folder name should be the block name with the / replaced with - (i.e. wsuwp/name -> wsupw-name)
			$block_folder = str_replace( '/', '-', $block );

			$block_class = __NAMESPACE__ . '\\' . $class;

			require_once $block_dir . $block_folder . '/block.php';

			// Call get('register_block') to check if the block should be registered, default is true in class-block.php
			if ( call_user_func( array( $block_class, 'get' ), 'register_block' ) ) {
				register_block_type(
					$block,
					array(
						'api_version'     => 2,
						'render_callback' => array( $block_class, 'render_block' ),
						'editor_script'   => 'cahnrs-gutenberg-blocks',
					)
				);
			}
		}

        add_filter(
            'wsu_allowed_blocks_filter',
            function ($blocks) {
                foreach (self::$block_names as $block_name) {
                    if (!in_array($block_name, $blocks, true)) {
                        $blocks[] = $block_name;
                    }
                }
                return $blocks;
            }
        );
    }

    public static function init()
    {
        add_action('init', __CLASS__ . '::register_block');
    }
}

Register_CAHNRS_News_Blocks::init();