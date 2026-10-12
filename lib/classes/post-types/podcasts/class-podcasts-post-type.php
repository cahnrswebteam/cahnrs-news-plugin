<?php namespace CAHNRS\Plugin\News;

class Podcast_Post_Type_CAHNRS_News extends Post_Type_CAHNRS_News {

	public function __construct() {

		add_action( 'init', array( $this, 'register_post_type' ) );

		add_filter('pre_get_posts', array( $this, 'cahnrs_admin_podcast_oder'), 1);

		add_action( 'save_post_podcast', array( $this, 'set_category_featured_image' ), 20, 3 );

	} // End __construct

	public function cahnrs_admin_podcast_oder( $wp_query ) {
		if (is_admin()) {
			
			$post_type = $wp_query->query['post_type'];
		
			if ( $post_type == 'podcast') {
		
				$wp_query->set('orderby', 'date');
			
				$wp_query->set('order', 'DESC');
			}
		}
	}

	public function register_post_type() {

		$labels = array(
			'name'               => 'Podcasts',
			'singular_name'      => 'Podcasts',
			'menu_name'          => 'Podcasts',
			'name_admin_bar'     => 'Podcasts',
			'add_new'            => 'Add Podcast',
			'add_new_item'       => 'Add Podcast',
			'new_item'           => 'New Podcast',
			'edit_item'          => 'Edit Podcast',
			'view_item'          => 'View Podcast',
			'all_items'          => 'All Podcasts',
			'search_items'       => 'Search Podcasts',
			'parent_item_colon'  => 'Parent Podcasts:',
			'not_found'          => 'No Podcasts found.',
			'not_found_in_trash' => 'No Podcasts found in Trash.',
		);

		$args = array(
			'labels'             => $labels,
			'description'        => 'Podcasts for Theme use.',
			'public'             => true,
			'show_in_menu'       => true,
			'rewrite'            => array( 'slug' => 'podcasts' ),
			'capability_type'    => 'post',
			'show_in_rest'       => true,
			'has_archive'        => true,
			'hierarchical'       => true,
			'menu_position'      => null,
			'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'revisions', 'post-formats', 'excerpt' ),
			'taxonomies'  		 => array( 'podcast_category', 'post_tag','podcast_cat' ),
		);

		register_post_type( 'podcast', $args );


	} // End register_post_type

	public function set_category_featured_image( $post_id, $update ){
		if( defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
			return;
		}

		if( wp_is_post_revision( $post_id ) ){
			return;
		}

		if( !has_term( 'food-safety-in-a-minute', 'podcast_category', $post_id) ){
			return;
		}

		if( has_post_thumbnail ($post_id) ){
			return;
		}

		$image_url = 'https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/2021/07/food-safety-in-a-minute.jpg';
		$attachment_id = $this->get_or_import_featured_image( $image_url, $post_id);

		if( $attachment_id ){
			set_post_thumbnail( $post_id, $attachment_id);
		}
	}

	private function get_or_import_featured_image( $image_url, $post_id ){
		$existing = get_posts( array(
			'post_type' => 'attachment',
			'post_status' => 'inherit',
			'posts_per_page' => 1,
			'meta_key' => '_podcast_source_image',
			'meta_value' => $image_url,
			'fields' => 'ids'
		));

		if( !empty( $existing )){
			return $existing[0];
		}

		if( !function_exists( 'media_sideload_image' )){
			require_once ABSPATH . 'wp-admin/includes/media.php';
			require_once ABSPATH . 'wp-admin/includes/file.php';
			require_once ABSPATH . 'wp-admin/includes/image.php';
		}

		$attachment_id = media_sideload_image( $image_url, $post_id, 'Food Safety in a Minute', 'id' );

		if( is_wp_error( $attachment_id )){
			return false;
		}

		update_post_meta( $attachment_id, '_podcast_source_image', $image_url);

		return $attachment_id;
	}


} // End Slide_Post_Type_CAHNRS_News

$podcasts_Post_Type_CAHNRS_News = new Podcast_Post_Type_CAHNRS_News();
