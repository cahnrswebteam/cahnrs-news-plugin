<div class="cahnrs-news-post-editor">
	<div  class="cahnrs-news-field-set">
		<h2>Video Options</h2>
		<div class="cahnrs-news-field">
			<label>Video URL</label>
			<div class="cahnrs-news-helper-text">Video URL can be the full YouTube URL or the ID for the video. Example: https://www.youtube.com/watch?v=<b>4rb8aOzy9t4</b> or simply the ID <b>4rb8aOzy9t4</b>.</div>
			<input type="text" name="_video_id" value="<?php echo wp_kses_post( $video['id'] ); ?>" />
		</div>
		<div class="cahnrs-news-field cahnrs-news-field-full">
			<label>Video Summary</label>
			<div class="cahnrs-news-helper-text">Provide a plain text description of the video ( 1-4 sentances ). The summary will render on the video page above the "Video Page Content".</div>
			<textarea type="text" name="excerpt"><?php echo wp_kses_post( $post->post_excerpt ); ?></textarea>
		</div>

		<div class="cahnrs-news-field cahnrs-news-field-full">
			<label>Video Transcript</label>
			<div class="cahnrs-news-helper-text">Provide a transcript.</div>
			<?php wp_editor( $video['transcript'], 'cahnrs_script_editor', $settings = array('textarea_name'=>'_video_transcript','textarea_rows'=>10, 'media_buttons' => false, 'wpautop' => false) ); ?>
		</div>
	</div>
</div>
