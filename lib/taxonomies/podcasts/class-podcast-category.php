<?php namespace CAHNRS\Plugin\News;

class Podcast_Category_CAHNRS {


	public function __construct() {

		add_action( 'init', array( $this, 'register_taxonomy' ), 999 );

	} // End __construct


	public function register_taxonomy() {

		$labels = array(
			'name'              => 'Podcast Categories',
			'singular_name'     => 'Podcast Category',
			'search_items'      => 'Search Categories',
			'all_items'         => 'All Categories',
			'parent_item'       => 'Parent Podcast Category',
			'parent_item_colon' => 'Parent Podcast Category:',
			'edit_item'         => 'Edit Podcast Category',
			'update_item'       => 'Update Podcast Category',
			'add_new_item'      => 'Add New Podcast Category',
			'new_item_name'     => 'New Podcast Category',
			'menu_name'         => 'Podcast Category',
		);

		$args = array(
			'hierarchical'      	=> true,
			'labels'            	=> $labels,
			'show_ui'           	=> true,
			'show_in_rest'       	=> true,
			'show_admin_column' 	=> true,
			'query_var'         	=> true,
			'rewrite'           	=> array( 'slug' => 'podcasts-category' ),
		);

		register_taxonomy( 'podcast_category', array( 'podcast' ), $args );

	} // End register taxonomy


} // End Slideshow_Category_CAHNRS

$podcast_category_cahnrs = new Podcast_Category_CAHNRS();
