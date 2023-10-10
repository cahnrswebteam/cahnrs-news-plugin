<?php namespace CAHNRS\Plugin\News;

class Block_WSUWP_Search_Archive extends \WSUWP\Plugin\Gutenberg\Block {

	protected static $block_name    = 'cahnrs/archive-search';
	protected static $default_attrs = array(
		'className'   => 'wsu-archive-search',
	);


	public static function render( $attrs, $content = '' ) {
		return get_search_form(false);
	}
	
}
