<?php namespace CAHNRS\Plugin\News;

class Video_Category_CAHNRS {


	public function __construct() {

		add_action( 'init', array( $this, 'register_taxonomy' ), 999 );

	} // End __construct


	public function register_taxonomy() {

		$labels = array(
			'name'              => 'Video Categories',
			'singular_name'     => 'Video Category',
			'search_items'      => 'Search Categories',
			'all_items'         => 'All Categories',
			'parent_item'       => 'Parent Video Category',
			'parent_item_colon' => 'Parent Video Category:',
			'edit_item'         => 'Edit Video Category',
			'update_item'       => 'Update Video Category',
			'add_new_item'      => 'Add New Video Category',
			'new_item_name'     => 'New Video Category',
			'menu_name'         => 'Video Category',
		);

		$args = array(
			'hierarchical'          => true,
			'labels'                => $labels,
			'show_ui'               => true,
			'show_admin_column'     => true,
            'show_in_rest'          => true,
			'query_var'             => true,
			'rewrite'               => array( 'slug' => 'video-category' ),
		);

		register_taxonomy( 'video_category', array( 'video' ), $args );

	} // End register taxonomy


} // End Video_Category_CAHNRS

$video_category_cahnrs = new Video_Category_CAHNRS();
