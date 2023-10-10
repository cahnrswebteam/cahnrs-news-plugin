<?php namespace CAHNRS\Plugin\News;

class Block_WSUWP_Extension_Newsletter extends \WSUWP\Plugin\Gutenberg\Block {

	protected static $block_name    = 'cahnrs/extension-newsletter';
	protected static $default_attrs = array(
		'className'   => 'cahnrs-extension-newsletter',
	);


	public static function render( $attrs, $content = '' ) {
		$extensionNewsletterBlock = "<article class='wsu-card--style-horizontal-33 block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33'>
			<div class='wsu-image-frame wsu-image--ratio-16-9'>
				<a href='https://news.cahnrs.wsu.edu/newsletters/subscribe-to-the-wsu-extension-update/'><img src='https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/block-image3.jpg' alt='Subscribe to Extension Newsletter' /></a>
			</div>
			
			<div class='wsu-card__content' style='padding: 1.25rem;'>
				<h2 class='wsu-title'><a href='https://news.cahnrs.wsu.edu/newsletters/subscribe-to-the-wsu-extension-update/'>Extension Update Newsletter</a></h2>
				<p class='static-block-description wsu-caption'>Published monthly, the Extension Update newsletter provides highlights, upcoming events, the who’s who, as well as compelling stories from across the Washington State University Extension system.</p>
			</div>
		</article>";

		return $extensionNewsletterBlock;
	}
	
}
