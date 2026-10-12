<?php namespace CAHNRS\Plugin\News;

class CAHNRS_Author_Fields {

    public function __construct() {
        add_action('show_user_profile', array($this, 'add_author_fields'));
        add_action('edit_user_profile', array($this, 'add_author_fields'));
        add_action('personal_options_update', array($this, 'save_phone_number'));
        add_action('edit_user_profile_update', array($this, 'save_phone_number'));
    }

    public function add_author_fields($user) {
        $phone_number = get_the_author_meta('phone_number', $user->ID);
        ?>
        <h3>Extra Profile Information</h3>
        <table class="form-table">
            <tr>
                <th><label for="phone_number">Phone Number</label></th>
                <td>
                    <input type="text" name="phone_number" id="phone_number" value="<?php echo $phone_number; ?>" class="regular-text" /><br />
                    <span class="description">Please enter your phone number.</span>
                </td>
            </tr>
        </table>


        <?php
    }

    public function save_phone_number($user_id) {
        if (!current_user_can('edit_user', $user_id)) {
            return false;
        }

        update_user_meta($user_id, 'phone_number', sanitize_text_field($_POST['phone_number']));
    }

}

$CAHNRS_Author_Fields = new CAHNRS_Author_Fields();