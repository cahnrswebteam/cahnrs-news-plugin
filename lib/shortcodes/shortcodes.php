<?php namespace CAHNRS\Plugin\News;

class CAHNRSNewsShortcode {

    public static function init() {
        add_shortcode('cahnrs_news_child_categories', array( __CLASS__, 'cahnrs_child_category_aside' ), 5 );
	}

	public static function cahnrs_child_category_aside(){
        $current_category = get_queried_object();

        if (!isset($current_category->term_id)) {
            return;
        }

        $child_categories = array();
        $main_parent_category_name = '';

        if ($current_category->parent == 0) {
            // This is a main parent category, get its children
            $child_categories = get_categories(array(
                'child_of' => $current_category->term_id
            ));
            $main_parent_category_name = $current_category->name;
        } else {
            // This is a child category, get its parent and then get the parent's children
            $parent_category = get_category($current_category->parent);
            if ($parent_category) {
                $child_categories = get_categories(array(
                    'child_of' => $parent_category->term_id
                ));
                $main_parent_category_name = $parent_category->name;
            }
        }

        if (empty($child_categories)) {
            return;
        }

        $output = "<h2>$main_parent_category_name Categories</h2>";
        $output .= '<ul>';
        foreach ($child_categories as $child_category) {
            $category_link = get_category_link($child_category->term_id);
            $output .= '<li><a href="' . $category_link . '">' . $child_category->name . '</a></li>';
        }
        $output .= '</ul>';

        return $output;
    
    }

}

CAHNRSNewsShortcode::init();
