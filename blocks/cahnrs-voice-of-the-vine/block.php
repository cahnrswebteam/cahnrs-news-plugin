<?php namespace CAHNRS\Plugin\News;

class Block_WSUWP_Voice_of_the_Vine extends \WSUWP\Plugin\Gutenberg\Block {

	protected static $block_name    = 'cahnrs/voice-of-the-vine';
	protected static $default_attrs = array(
		'className'   => 'cahnrs-voice-of-the-vine',
	);


	public static function render( $attrs, $content = '' ) {
		$voiceOfTheVineBlock = "<article class='wsu-card--style-horizontal-33 block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33'>
			<div class='wsu-image-frame wsu-image--ratio-16-9'>
				<a href='https://news.cahnrs.wsu.edu/newsletters/voice-of-the-vine/'><img src='https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/V-and-E-header-1-1024x311.png' alt='Subscribe to Voice of the Vine'/></a>
			</div>
			
			<div class='wsu-card__content' style='padding: 1.25rem;'>
				<h2 class='wsu-title'><a href='https://news.cahnrs.wsu.edu/newsletters/voice-of-the-vine/'>Voice of the Vine</a></h2>
				<p class='static-block-description'>Subscribe to the Voice of the Vine newsletter for stories about the latest emerging research from WSU's Department of Viticulture and Enology, profiles of students, alumni, and researchers working in Washington's world-class wine industry, info on upcoming events, and much more.</p>
				</div>
			</article>";

		return $voiceOfTheVineBlock;
	}
	
}
