wp.hooks.addFilter('blocks.registerBlockType', 'core/shortcode', function(settings, name) {
    if (name === 'core/shortcode') {
        settings.transforms = {
            from: [
                {
                    type: 'shortcode',
                    tag: 'music',  
                    attributes: {
                        content: {
                            type: 'string',
                            shortcode: (props) => props && props.content ? props.content : '', 
                        }
                    },
                    transform: (props) => {
                        const content = props && props.content ? props.content : '[music]'; 

                        console.log("Transforming [music] shortcode to paragraph block.");

                        const paragraphBlock = wp.blocks.createBlock('core/paragraph', {
                            content: content,
                        });

                        return paragraphBlock;
                    },
                },
            ],
        };
    }

    return settings;
});
