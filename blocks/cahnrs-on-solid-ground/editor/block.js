/**
 *  BLOCK: CAHNRS News On Solid Ground
 *  ---
 *  Static block for On Solid Ground
 */

 const { __ } = wp.i18n
 const { registerBlockType } = wp.blocks
 const { useBlockProps, RichText } = wp.blockEditor
 
 registerBlockType('cahnrs/on-solid-ground', {
   title: __( 'CAHNRS On Solid Ground' ),
   icon: 'megaphone',
   category: 'cahnrs',
   keywords: [
     __( 'on solid ground' )
   ],
 
   // Enable or disable support for low-level features
   supports: {
        // Turn off ability to edit HTML of block content
        html: false,
        // Turn off reusable block feature
        reusable: false,
        // Add alignwide and alignfull options
        align: false
    },
 
   // Set up data model for custom block
   attributes: {
        
    },
 
   // The UI for the WordPress editor
   edit: props => {
    // Pull out the props we'll use
    const { attributes, className, setAttributes } = props
  
    return (
      <div {...useBlockProps()}>
        <div className={className} class='block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33'>
          <div class='wsu-image-frame wsu-image-frame-control wsu-image--ratio-2-5'>
            <img src='https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/2021/04/osg-promo.png' alt="On Solid Ground" />
          </div>
          
          <div class='wsu-card__content'>
            <h2>On Solid Ground</h2>
            <p class='static-block-description'>Articles like this one are shared monthly in the On Solid Ground newsletter. Subscribe for more updates about WSU research and discovery that supports Northwest agriculture and natural resources.</p>
          </div>
        </div>
      </div>
    )
  },
 
   // The output on the live site
   // No save, dynamic block
    save: props => {
      return null
    }
 })