<?php namespace CAHNRS\Plugin\News;

class Block_WSUWP_CAHNRS_Author_Information extends \WSUWP\Plugin\Gutenberg\Block {

	protected static $block_name    = 'cahnrs/author-information';

	protected static $default_attrs = array(
		'showBio' 				=> true,
		'showImage' 			=> true,
		'showEmail' 			=> true,
		'showTelephone' 		=> true,
		'headingTag'        	=> 'h3',
	);

	public static function render( $attrs, $content = '' ) {
			
		ob_start();

			
			include __DIR__ . '/template.php';


		return ob_get_clean();

	}
	
}
