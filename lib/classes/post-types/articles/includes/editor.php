<div class="cahnrs-news--post-editor">
	<div  class="cahnrs-news--field-set">
		<h2>Story Placement: <span>(Required)</span></h2>
		<div class="news-placement">
<div class="cahnrs-news--field checkbox-field <?php if ( ! current_user_can( 'administrator' ) ) : ?><?php echo esc_html( 'admin-hidden-field' ); ?><?php endif; ?>">
				<input id="college-wide_distribute" type="checkbox" name="_article_distribute" value="college-home" <?php checked( 'college-home', $distribute ) ?> />
				<label for="college-wide_distribute">College Home</label>
			</div>
			<div class="cahnrs-news--field checkbox-field">
				<input id="college-wide_distribute" type="checkbox" name="_article_distribute" value="college-wide" <?php checked( 'college-wide', $distribute ) ?> />
				<label for="college-wide_distribute">College Wide</label>
			</div>
			<div class="cahnrs-news--field checkbox-field">
				<input id="local_distribute" type="checkbox" name="_article_distribute" value="local" <?php checked( 'local', $distribute ) ?> />
				<label for="local_distribute">Local Only</label>
			</div>
			<div class="cahnrs-news--field checkbox-field">
				<input id="hidden_distribute" type="checkbox" name="_article_distribute" value="hidden" <?php checked( 'hidden', $distribute ) ?> />
				<label for="hidden_distribute">Hidden (by link only)</label>
			</div>
		</div>
	</div>
	<div  class="cahnrs-news--field-set">
		<h2>Story Format: <span>(Required)</span></h2>
		<div class="news-format">
			<div class="cahnrs-news--field checkbox-field">
<input id="feature-slideshow_placement_input" type="checkbox" name="_article_placement[]" value="feature-slideshow" <?php if ( in_array( 'feature-slideshow', $placement, true ) ) : ?><?php echo 'checked="checked"'; ?><?php endif; ?> />
				<label for="feature-slideshow_placement_input">Feature Slideshow</label>
			</div>
			<div class="cahnrs-news--field checkbox-field">
				<input id="news-feed_placement_input" type="checkbox" name="_article_placement[]" value="news-feed" <?php if ( in_array( 'news-feed', $placement, true ) ) : ?><?php echo 'checked="checked"'; ?><?php endif; ?> />
				<label for="news-feed_placement_input">News Article (News Feed)</label>
			</div>
		</div>
	</div>
	<div  class="cahnrs-news--field-set">
		<h2>Categorize This Story As: <span>(Required)</span></h2>
		<div class="cahnrs-news--field-set-description"><span>Check All That Apply.</span> Select all topics relevant to this story.</div>
		<div class="news-release-categories">
			<?php foreach ( $general_topics as $name => $label ) : ?>
			<div class="cahnrs-news--field checkbox-field cahnrs-news--field-25 checkbox-list">
				<input id="<?php echo esc_html( $name ); ?>_topic_input" type="checkbox" name="_article_topic[]" value="<?php echo esc_html( $label ); ?>" <?php if ( in_array( $name, $topic_values, true ) || in_array( $label, $topic_values, true ) ) : ?><?php echo 'checked="checked"'; ?><?php endif; ?> />
				<label for="<?php echo esc_html( $name ); ?>_topic_input"><?php echo esc_html( $label ); ?></label>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
	<div  class="cahnrs-news--field-set">
		<h2>This Story is About: <span>(Required)</span></h2>
		<div class="cahnrs-news--field-set-description"><span>Check All That Apply.</span> Select the primary subject(s) of the story. If the story is about a faculty member then select "Faculty". Please use discretion with the subject areas. Do not select "Facilities & Centers" or
		other subjects unless the story is actually about that subject.</div>
		<div class="news-release-categories">
			<?php foreach ( $subjects as $name => $label ) : ?>
			<div class="cahnrs-news--field checkbox-field cahnrs-news--field-25 checkbox-list">
				<input id="<?php echo esc_html( $name ); ?>_subject_input" type="checkbox" name="_article_subject[]" value="<?php echo esc_html( $label ); ?>" <?php if ( in_array( $name, $subjects_values, true ) || in_array( $label, $subjects_values, true ) ) : ?>'checked="checked"<?php endif; ?> />
				<label for="<?php echo esc_html( $name ); ?>_subject_input"><?php echo esc_html( $label ); ?></label>
			</div>
			<?php endforeach; ?>
		</div>
	</div>
	<div  class="cahnrs-news--field-set">
		<h2>Slide Options</h2>
		<div class="cahnrs-news--field text-field">
			<label>Short Title: <span>(Optional)</span></label>
			<div class="description">Short title used in slideshows and other areas where text is limited.</div>
			<input type="text" name="_article_short_title" value="<?php echo esc_html( $short_title ); ?>" />
		</div>
		<div class="cahnrs-news--field text-field">
			<label>Redirect URL: <span>(Optional)</span></label>
			<div class="description">Redirect to a story posted somewhere else.</div>
			<input type="text" name="_article_redirect_url" value="<?php echo esc_url( $redirect_url ); ?>" />
		</div>
	</div>
</div>
