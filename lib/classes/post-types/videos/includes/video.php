<div class="wp-block-embed__wrapper">
    <figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio wsu-video--width-full">
        <iframe title="YouTube Embedded Video" width="560" height="315" src="<?php echo esc_url( $video_url ); ?>?rel=0" frameborder="0" allowfullscreen></iframe>
    </figure>
    
    <p><?php echo wp_kses_post( $post->post_excerpt ); ?></p>

    <?php if(!empty($video['transcript'])){ ?>
        <div class="video-transcript">
            <div class="wsu-accordion wsu-accordion--size-small">
                <h2 id="unique-id-1__title" class="wsu-accordion__title"><button id="videoModal-<?php echo $counter; ?>-transcript" class="wsu-accordion__title-button wsu-accordion--toggle" aria-expanded="false" aria-controls="unique-id-1__content">Transcript</button></h2>
                <div id="unique-id-1__content" class="wsu-accordion__content" aria-labelledby="unique-id-1__title" style="">
                    <div class="wsu-accordion__content-inner" tabindex="0">
                        <?php 
                        
                        echo $video['transcript']; 
                    ?>
                    </div>
                </div>
            </div>
        </div>
    <?php } ?>
</div>
    
    
