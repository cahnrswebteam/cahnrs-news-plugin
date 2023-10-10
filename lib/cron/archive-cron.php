<?php 

// class CAHNRSNewsArchivePost{
//     public static function init(){
//         // // add the schedule event if it has been removed 
//         if( ! wp_next_scheduled( 'cahnrs_news_archive_posts' ) ) {
//             wp_schedule_event( time(), 'hourly',array( __CLASS__, 'cahnrs_news_archive_posts') ); //run the event daily
//         }
        
//         // action hooked to fired with wordpress cron job
//         add_action( 'cahnrs_news_archive_posts', array( __CLASS__, 'cahnrs_news_archive_posts') );
//     }

//     public static function cahnrs_news_archive_posts(){
//         $posts = get_posts( [
//             'numberposts' => -1,
//             'post_status' => 'publish',
//             'post_type'   => array('post', 'article'),
//             'date_query' => [
//               // get all the posts from the database which are older than 60 days
//               'before' => date( "Y-m-d H:i:s", strtotime( '-60 days' ) ),
//             ],
//           ]);
        
//           if( !empty($posts) ) {
//             foreach( $posts as $post ) {
              
//               $my_post = array(
//                   'ID' => $post->ID,
//                   'post_status'   => 'archive',
      
//               );
//               wp_update_post( $my_post );
      
//             }
//           }
//     }
// }

// CAHNRSNewsArchivePost::init();