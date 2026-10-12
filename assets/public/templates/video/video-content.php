
<?php

//Retrieves the URL of the Youtube Video
$video_url = get_post_custom_values( '_video_id' );
$video_transcript = get_post_custom_values( '_video_transcript' );

//Strips out everything except the ID of the Youtube Video
preg_match('%(?:youtube(?:-nocookie)?\.com/(?:[^/]+/.+/|(?:v|e(?:mbed)?)/|.*[?&]v=)|youtu\.be/)([^"&?/ ]{11})%i', $video_url[0], $match);

$youtube_id = $match[1];

//Creates new YouTube URL to be used for embed
$youtube_URL_with_id = 'https://www.youtube.com/embed/' . $youtube_id ."?rel=0" ;

?>

<div class="individual-video">
<div class="video-image-container">
    <div class="video-image">
        <?php 
            $thumbnailYT = get_the_post_thumbnail( $video_id, 'video-thumb' );
            
            if(!empty($thumbnailYT)){
                echo $thumbnailYT;
            }else{
                echo "<img src='https://img.youtube.com/vi/$youtube_id/mq1.jpg' alt='' width='213' height='142'>";
            }
        ?>
    </div>
</div>


<h2 class="wsu-title">
    <?php echo wp_kses_post( get_the_title() ); ?>
</h2>

<?php
    echo "<p class='wsu-caption'>". wp_kses_post( wp_strip_all_tags( get_the_excerpt() ) ) . "</p>";
?>

<!-- Modal -->
<div class="modal fade" id="videoModal-<?php echo $counter; ?>" tabindex="-1" role="dialog" aria-modal="true" aria-describeby="videoTitle" data-backdrop="static">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <?php echo  '<p class="sr-only" id="videoTitle">' . get_the_title() . ' video modal.</p>'; ?>
                
                <button type="button" class="close" data-dismiss="modal" aria-label="Close Modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="wrapper-iframe">
                <a class="skip-to-transcript-link" href="#videoModal-<?php echo $counter; ?>-transcript">Skip to Transcript</a>
                <iframe src="<?php echo $youtube_URL_with_id; ?>" name="<?php echo get_the_title(); ?>" frameborder="0" width="900" height="700"></iframe>
            </div>

            <?php if(!empty($video_transcript[0])){ ?>
                <div class="video-transcript">
                    <div class="wsu-accordion  wsu-accordion--size-small">
                        <h3 id="unique-id-1__title" class="wsu-accordion__title">
                            <button id="videoModal-<?php echo $counter; ?>-transcript" class="wsu-accordion__title-button wsu-accordion--toggle" aria-expanded="false" aria-controls="unique-id-1__content">Transcript</button>
                        </h3>
                        <div id="unique-id-1__content" class="wsu-accordion__content" aria-labelledby="unique-id-1__title" style="">
                            <div class="wsu-accordion__content-inner" tabindex="0">
                                <?php 
                                
                                echo $video_transcript[0]; 
                            ?>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
    </div>
    
</div>
    
<a href="#" data-bs-toggle="modal" data-bs-target="#videoModal-<?php echo $counter; ?>" data-keyboard="true">
    <?php echo "Watch " . wp_kses_post( get_the_title() ) . " video."; ?>
</a>   

</div> <!-- .individual-video -->

