const { __ } = wp.i18n;
const { useBlockProps, InspectorControls } = wp.blockEditor;
const {
  TextControl,
  PanelBody,
  PanelRow,
  BaseControl,
  CheckboxControl,
  RangeControl,
  ToggleControl,
  __experimentalRadio: Radio,
  __experimentalRadioGroup: RadioGroup,
} = wp.components;

import React, { useState, useEffect } from "react";

import {
  FeedTaxonomyControl,
  FeedCountControl,
  FeedTermControl,
  FeedPanel,
} from "../../../assets/src/js/partials/block-controls/feed-controls/feed-controls";


export default function Edit(props) {
  const { attributes, setAttributes } = props;
  
  return (
    <div {...useBlockProps()}>
      <InspectorControls key="setting">
        <FeedPanel>
          <FeedTaxonomyControl
            label="Taxonomy"
            help="Select taxonomy to filter posts by"
            host={attributes.host || window.wsu.ROOT_URL}
            postType={attributes.postType}
            value={attributes.taxonomy}
            onChange={(taxonomy) => setAttributes({ taxonomy })}
          />
          {attributes.taxonomy && (
            <FeedTermControl
              label="Terms"
              help="Filter posts by searching and selecting terms in the selected taxonomy"
              host={attributes.host || window.wsu.ROOT_URL}
              taxonomy={attributes.taxonomy}
              value={attributes.termsSelected}
              onChange={ (terms) => setAttributes({ terms: terms.termsList, termsSelected: terms.termsSelected, queryTerms: terms.queryTerms } ) }
            />
          )}
          <FeedCountControl {...props} />
        </FeedPanel>
        
      </InspectorControls>

      <div className="wsu-gutenberg-video-list">
        

        <div
          className={`wsu-gutenberg-video-list__profiles wsu-gutenberg-video-list__profiles--per-row-${attributes.columns}`}
        >
          {[...Array(attributes.columns)].map((e, i) => (
            <div className="wsu-gutenberg-video-list__profile">
              { (
                <div className="wsu-gutenberg-video-list__video-image"></div>
              )}

              <div className="wsu-gutenberg-video-list__video-title">
                {(
                  <h2 className="wsu-gutenberg-video-list__video-name">
                    Video Title
                  </h2>
                )}

                {(
                  <div class="wsu-gutenberg-video-list__video-description">
                    Video Description
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>


        
      </div>
    </div>
  );
}

