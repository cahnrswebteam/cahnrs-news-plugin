<?php

// Copied from old News Release Plugin

$value = get_post_meta( $post->ID, '_sources', true );

//var_dump( $value );

//print_r($value);

echo '<div id="news-release-sources"><h2>News Sources: <span>(Optional)</span></h2><div class="sources-container">';

// Here comes the inelegant part...

echo '<div class="source">';
echo '<label for="name_1">Name, Title</label><br />';
echo '<input type="text" name="_sources[name_1]" value="' . esc_html( $value['name_1'] ) . '" class="widefat" /><br />';
echo '<label for="info_2">Phone, Email</label><br />';
echo '<input type="text" name="_sources[info_1]" value="' . esc_html( $value['info_1'] ) . '" class="widefat" /><br />';
echo '</div>';

echo '</div>';

echo '<p><a href="#" id="add-news-release-source">+ Add additional source</a></p></div>'; ?>
<script>
jQuery(document).ready(function($) {

	var counter = $( '.sources-container > .source' ).length;

	$( '#news-release-sources' ).on( 'click', '#add-news-release-source', function(event) {

		event.preventDefault();

		counter++;

		// Yes, this is clunky (hey, I just make this stuff up as I go).
		// Top out at 5 sources until the PHP can be refined to be more dynamic.
		if ( counter < 6 ) {

			var row = $( '.source:first' ).clone();

			$(row).find("input[type='text']").each(function() {
				$(this).attr( 'name', $(this).attr( 'name' ).replace( '1', counter ) );
				$(this).attr( 'id', $(this).attr( 'id' ).replace( '1', counter ) );
				$(this).val( '' );
			});
			row.appendTo( '.sources-container' );

		}

		console.log(counter);

	});

});
</script>
