<div class="wsu-video-list">
    <?php 
        if(have_posts()){
            $counter = 1;
            
            while(have_posts()){
                
                the_post(); 

                include plugin_dir_path( __FILE__ ) .'/video-content.php'; 

                $counter ++; ?>
                
        <?php }
        }

    ?>
</div>