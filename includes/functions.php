<?php namespace CAHNRS\Plugin\News;

class Functions_CAHNRS_News {

	public static $version = '1.0.0';

	public function __construct() {

		$this->init_theme_functions();

        add_image_size( 'video-thumb', 300, 200, true ); // Video Thumbnail Image
		
		add_filter('the_author', array(__CLASS__,'add_author_link_to_byline'));


	} // end __construct

	public static function add_author_link_to_byline() {
		global $post;
	
		$author_id = $post->post_author;
		$author_link = get_author_posts_url($author_id);
	
		return '<span class="wsu-meta-byline__name"><a href="' . $author_link . '">' . get_the_author_meta('display_name', $author_id) . '</a></span>';
	}


	protected function init_theme_functions() {

		$this->add_post_types();

		$this->add_taxonomies();


	} // end init_theme_functions


	protected function add_post_types() {

		require_once __DIR__ . '/../lib/classes/post-types/class-post-type-cahnrs.php';

		require_once __DIR__ . '/../lib/classes/post-types/articles/class-articles-post-type-cahnrs.php';

		require_once __DIR__ . '/../lib/classes/post-types/podcasts/class-podcasts-post-type.php';

		require_once __DIR__ . '/../lib/classes/post-types/videos/class-video-post-type.php';


	} // End add_post_types

	protected function add_taxonomies() {

		require_once __DIR__ . '/../lib/taxonomies/podcasts/class-podcast-category.php';
		require_once __DIR__ . '/../lib/taxonomies/videos/class-videos-category.php';

	} // End add_taxonomies
	

} // end Functions_CAHNRS_News

$cahnrs_news_theme = new Functions_CAHNRS_News();