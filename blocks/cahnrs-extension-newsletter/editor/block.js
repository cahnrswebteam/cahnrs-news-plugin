/**
 *  BLOCK: CAHNRS News Extension Newsletter
 *  ---
 *  Static block for Extension Newsletter
 */

 const { __ } = wp.i18n
 const { registerBlockType } = wp.blocks
 const { useBlockProps, RichText } = wp.blockEditor
 
 registerBlockType('cahnrs/extension-newsletter', {
   title: __( 'CAHNRS Extension Newsletter' ),
   icon: 'megaphone',
   category: 'cahnrs',
   keywords: [
     __( 'Extension Newsletter' )
   ],
 

   // The UI for the WordPress editor
   edit: props => {
    // Pull out the props we'll use
    const { attributes, className, setAttributes } = props
  
    return (
      <div {...useBlockProps()}>
        <div className={className} class='block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33'>
          <div class='wsu-image-frame wsu-image-frame-control wsu-image--ratio-2-5'>
            <img src='https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/block-image3.jpg' alt="Subscribe to Extension Newsletter" />
          </div>
          
          <div class='wsu-card__content'>
            <h2>Extension Update Newsletter</h2>
            <p class='static-block-description'>Published monthly, the Extension Update newsletter provides highlights, upcoming events, the who’s who, as well as compelling stories from across the Washington State University Extension system.</p>
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