/**
 *  BLOCK: CAHNRS Archive Search
 *  ---
 *  Search that allows user to select to search for archived posts
 */

 const { __ } = wp.i18n
 const { registerBlockType } = wp.blocks
 const { useBlockProps, RichText } = wp.blockEditor
 
 registerBlockType('cahnrs/archive-search', {
   title: __( 'CAHNRS Archived News Search' ),
   icon: 'search',
   category: 'cahnrs',
   keywords: [
     __( 'search' )
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
        title: {
            type: 'string',
            selector: 'js-search-title'
        },
        author: {
            type: 'string',
            selector: 'js-search-author'
        },
        summary: {
            type: 'string',
            selector: 'js-search-summary',
            multiline: 'p'
        },
    },
 
   // The UI for the WordPress editor
   edit: props => {
    // Pull out the props we'll use
    const { attributes, className, setAttributes } = props
  
    return (
      <div {...useBlockProps()}>
        <div className={className}>
          <h2>Search Bar</h2>
          <p class='static-block-description'>Custom search bar for news website that will allow users to search archived articles</p>
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