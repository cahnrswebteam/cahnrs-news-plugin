/**
 *  BLOCK: CAHNRS News Voice of the Vine
 *  ---
 *  Static block for Voice of the Vine
 */

 const { __ } = wp.i18n
 const { registerBlockType } = wp.blocks
 const { useBlockProps, RichText } = wp.blockEditor
 
 registerBlockType('cahnrs/voice-of-the-vine', {
   title: __( 'CAHNRS Voice of the Vine' ),
   icon: 'megaphone',
   category: 'cahnrs',
   keywords: [
     __( 'voice of the vine' )
   ],
 

   // The UI for the WordPress editor
   edit: props => {
    // Pull out the props we'll use
    const { attributes, className, setAttributes } = props
  
    return (
      <div {...useBlockProps()}>
        <div className={className} class='block-editor-block-list__block wp-block wsu-card is-selected wp-block-wsuwp-card wsu-color-background--gray-5 wsu-card--style-horizontal-33'>
          <div class='wsu-image-frame wsu-image-frame-control wsu-image--ratio-2-5'>
            <img src='https://wpcdn.web.wsu.edu/cahnrs/uploads/sites/4/V-and-E-header-1-1024x311.png' alt="Voice of the Vine" />
          </div>
          
          <div class='wsu-card__content'>
            <h2>Voice of the Vine</h2>
            <p class='static-block-description'>Subscribe to the Voice of the Vine newsletter for stories about the latest emerging research from WSU's Department of Viticulture and Enology, profiles of students, alumni, and researchers working in Washington's world-class wine industry, info on upcoming events, and much more.</p>
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