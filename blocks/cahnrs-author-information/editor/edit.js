import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, ToggleControl } from '@wordpress/components';
import { HeadingTagControl } from '../../../assets/src/js/partials/block-controls/blockControls';

const Edit = (props) => {
    let { className, attributes, setAttributes } = props;

    const { showImage, showEmail, showBio, showTelephone } = attributes;

    const toggleImage = () => {
        setAttributes({ showImage: !showImage });
    };

    const toggleEmail = () => {
        setAttributes({ showEmail: !showEmail });
    };

    const toggleBio = () => {
        setAttributes({ showBio: !showBio });
    };

    const toggleTelephone = () => {
        setAttributes({ showTelephone: !showTelephone });
    };

    const blockProps = useBlockProps({
        className: "cahnrs-author-information",
    });
    
    return (
        <>
            <InspectorControls>
                <PanelBody title="Display Options">
                    <HeadingTagControl { ...props } allowedTags={ ['h2','h3','h4','h5','h6'] } />
                    <ToggleControl
                        label="Display Author Image"
                        checked={showImage}
                        onChange={toggleImage}
                    />
                    <ToggleControl
                        label="Display Author Email"
                        checked={showEmail}
                        onChange={toggleEmail}
                    />
                    <ToggleControl
                        label="Display Author Bio"
                        checked={showBio}
                        onChange={toggleBio}
                    />
                    <ToggleControl
                        label="Display Author Telephone"
                        checked={showTelephone}
                        onChange={toggleTelephone}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <h3>Author Information</h3>
                {showImage && (
                    <img
                        src="https://placeholder.com/150"
                        alt="Author Image"
                        className="author-information-image"
                    />
                )}
                {showBio && <p>This is the author bio.</p>}
                {showEmail && <p>Email: butch@wsu.edu</p>}
                {showTelephone && <p>Telephone: 555-555-5555</p>}
            </div>
        </>
    );
};

export default Edit;