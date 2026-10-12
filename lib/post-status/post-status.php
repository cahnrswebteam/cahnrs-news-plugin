<?php  namespace CAHNRS\Plugin\News;

class WSUNewsPostStatus{
    public static function init() {
        add_action( 'init', array( __CLASS__, 'wsu_news_custom_status' ));
        add_action('admin_footer-edit.php',array( __CLASS__, 'wsu_news_custom_status_quick_edit' ));
        add_action('admin_footer-post.php', array( __CLASS__, 'wsu_news_custom_status_add_post_page'));
        add_action('admin_footer-post-new.php', array( __CLASS__, 'wsu_news_custom_status_add_post_page'));
        add_filter( 'display_post_states', array( __CLASS__, 'wsu_news_admin_archive_status'), 10, 2 );
    }

    /*=====================================
        Register Custom Post Status
    ========================================*/
    public static function wsu_news_custom_status() {
        register_post_status( 'archive', array(
            'label'                     => _x( 'Archived', 'post' ),
            'label_count'               => _n_noop( 'Archived <span class="count">(%s)</span>', 'Archived <span class="count">(%s)</span>'),
            'public'                    => false,
            'internal'                  => false,
            'protected'                 => true,
            'private'                   => false,
            'exclude_from_search'       => true,
            'publicly_queryable'        => false,
            'show_in_admin_all_list'    => true,
        ));
    }

    /*=====================================================
        Add Custom Post Status to quick edit option dropdown
    =======================================================*/
    public static function wsu_news_custom_status_quick_edit(){
        echo "<script>
        jQuery(document).ready( function() {
            jQuery( 'select[name=\"_status\"]' ).append( '<option value=\"archive\">Archived</option>' );      
        }); 
        </script>";
    }

    /*=====================================================
        Add Custom Post Status to post/page options dropdown
    =======================================================*/
    public static function wsu_news_custom_status_add_post_page(){
        echo "<script>
        jQuery(document).ready( function() {        
            jQuery( 'select[name=\"post_status\"]' ).append( '<option value=\"archive\">Archived</option>' );
        });
        </script>";
    }

    /*=====================================================
        Add post state next to page title in admin dashboard
    ========================================================*/
    public static function wsu_news_admin_archive_status($post_states, $post){
        if ( get_post_status ( $post->ID ) == 'archive' ) {
            $post_states['archive'] = 'Archived';
        }
    
        return $post_states;
    }
    
}

WSUNewsPostStatus::init();

