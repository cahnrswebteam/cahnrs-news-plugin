<?php namespace CAHNRS\Plugin\News;

class Block_WSUWP_On_Solid_Ground extends \WSUWP\Plugin\Gutenberg\Block {

	protected static $block_name    = 'cahnrs/on-solid-ground';
	protected static $default_attrs = array(
		'className'   => 'cahnrs-on-solid-ground',
	);


	public static function render( $attrs, $content = '' ) {
		$onSolidGroundBlock = "<article  class='wsu-card--style-horizontal-33 block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33'>
			<div class='wsu-image-frame wsu-image-frame-control wsu-image--ratio-2-5'>
				<a href='https://news.cahnrs.wsu.edu/newsletters/on-solid-ground/'><img src='https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/2021/04/osg-promo.png' alt='Subscribe to On Solid Ground' /></a>
			</div>
			
			<div class='wsu-card__content' style='padding: 1.25rem;'>
				<h2 class='wsu-title'><a href='https://news.cahnrs.wsu.edu/newsletters/on-solid-ground/'>On Solid Ground</a></h2>
				<p class='static-block-description wsu-caption'>Articles like this one are shared monthly in the On Solid Ground newsletter. Subscribe for more updates about WSU research and discovery that supports Northwest agriculture and natural resources.</p>
			</div>
		</article >";
		return $onSolidGroundBlock;
	}
	
}
