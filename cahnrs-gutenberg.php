<?php
/**
 *
 * @wordpress-plugin
 * Plugin Name:       CAHNRS News 
 * Plugin URI:        https://cahnrs.wsu.edu/
 * Description:       Creates Gutenberg Blocks and Post Types for News Website 
 * Version:           1.2.1
 * Author:            CAHNRS Communications
 * Author URI:        https://cahnrs.wsu.edu/
 * Text Domain:       cahnrs-news-plugin
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

//Checks to see if WSUWP Gutenberg plugin is activated. 
register_activation_hook( __FILE__, 'news_wsuwp_plugin_gutenberg_plugin_check' );

function news_wsuwp_plugin_gutenberg_plugin_check(){
    if ( ! is_plugin_active( 'wsuwp-plugin-gutenberg/wsuwp-plugin-gutenberg.php' ) and current_user_can( 'activate_plugins' ) ) {
      wp_die('Sorry, this plugin requires WSUWP Gutenberg to be activated. Please activate plugin that plugin first before activating this one. <br><a href="' . admin_url( 'plugins.php' ) . '">&laquo; Return to Plugins</a> <style>div#query-monitor{display:none;}');
    }
}

//Include files from WSUWP Gutenberg Plugin
require_once( WP_PLUGIN_DIR . '/wsuwp-plugin-gutenberg/includes/plugin.php');

//Define the version of this CAHNRS Gutenberg plugin
define( 'CAHNRSNEWSBLOCKVERSION', '1.2.1' );

function cahnrs_news_init(){
	require_once __DIR__ . '/includes/plugin.php';
}

add_action( 'after_setup_theme', 'cahnrs_news_init' );


// Gets the plugin's URL.
function _get_cahnrs_news_plugin_url() {
  static $plugin_url;

  if (empty($plugin_url)) {
    $plugin_url = plugins_url(null, __FILE__);
  }

  return $plugin_url;
}