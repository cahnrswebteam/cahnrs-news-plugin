<?php
    $author_id = get_the_author_meta('ID');
    $author_name = get_the_author_meta('display_name', $author_id);
    $author_bio = get_the_author_meta('description', $author_id);
    $author_email = get_the_author_meta('email', $author_id);
    $author_telephone = get_the_author_meta('phone_number', $author_id);
    if (function_exists('get_field')) {
        if (get_field('author_image', 'user_'. $author_id)) {
            $author_image = get_field('author_image', 'user_'. $author_id);
        }
    }
?>


    <div class="cahnrs-author-information-block">
        <<?php echo esc_attr( $attrs['headingTag'] ); ?>><?php echo esc_html__('About the Author', 'author-information'); ?></<?php echo esc_attr( $attrs['headingTag'] ); ?>>

        <?php if( !empty( $author_image ) && $attrs['showImage'] ): ?>
            <img class="author-image" src="<?php echo esc_url($author_image['url']); ?>" alt="<?php echo esc_attr($author_image['alt']); ?>" width="250" />
        <?php endif; ?>

        <?php if($attrs['showBio']){ ?>
            <span class="cahnrs-author-bio"><?php echo esc_html($author_bio); ?></span>
        <?php } ?>

        <div class="cahnrs-author-information-block__author-contact">
            <?php if($attrs['showEmail']){ ?>
                <span class="cahnrs-author-email"><a href="mailto:<?php echo esc_html($author_email); ?>"><?php echo esc_html($author_email); ?></a></span>
            <?php } ?>

            <?php if($attrs['showTelephone'] && !empty( $author_telephone )){ ?>
                <?php $author_telephone = preg_replace("/^(\d{3})(\d{3})(\d{4})$/", "$1-$2-$3", $author_telephone); ?>

                <span class="cahnrs-author-telephone"><a href="tel:<?php echo esc_html($author_telephone); ?>"><?php echo esc_html($author_telephone); ?></a></span>
            <?php } ?>
        </div>
    </div>