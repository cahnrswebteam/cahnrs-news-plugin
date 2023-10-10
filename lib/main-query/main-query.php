<?php  namespace CAHNRS\Plugin\News;

class CAHNRSWSUNewsAddArticlesQuery{
    public static function init() {
        add_action('pre_get_posts', array( __CLASS__, 'cahnrs_news_articles_in_main_loop'), 10, 1);
    }

    
    public static function cahnrs_news_articles_in_main_loop( $query ) {
        if ( ! is_admin() && $query->is_main_query() ) {
            if ( $query->is_author() ) {
                $query->set( 'post_type', array( 'article' ) );

                $author = $query->get('author');
                $query->set('author', $author);
            } elseif ( $query->is_post_type_archive('video') ) {
                $query->set( 'post_type', array( 'video' ) );
            }elseif ( $query->is_archive('article') ) {
                $query->set( 'post_type', array( 'article' ) );
            }
        }
    }


    
}

CAHNRSWSUNewsAddArticlesQuery::init();

