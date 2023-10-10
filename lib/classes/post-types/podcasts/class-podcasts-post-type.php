<?php namespace CAHNRS\Plugin\News;

class Podcast_Post_Type_CAHNRS_News extends Post_Type_CAHNRS_News {

	public function __construct() {

		add_action( 'init', array( $this, 'register_post_type' ) );

		add_filter('pre_get_posts', array( $this, 'cahnrs_admin_podcast_oder'), 1);

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


} // End Slide_Post_Type_CAHNRS_News

$podcasts_Post_Type_CAHNRS_News = new Podcast_Post_Type_CAHNRS_News();
