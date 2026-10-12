const { registerPlugin } = wp.plugins;
const { PluginDocumentSettingPanel } = wp.editPost;
const { useState, useEffect } = wp.element;
const { TextControl } = wp.components;
const { dispatch, select } = wp.data;

const cahnrsArticleExternalLink = () => {
  const [externalLink, setExternalLink] = useState('');

  useEffect(() => {
    const postType = select('core/editor').getCurrentPostType(); 
    if (postType === 'article') {
      const postMeta = select('core/editor').getEditedPostAttribute('meta');
      if (postMeta && postMeta._article_redirect_url) {
        setExternalLink(postMeta._article_redirect_url);
      }
    }
  }, []);

  const updatePostWithLink = (newLink) => {
    if (dispatch) {
      dispatch('core/editor').editPost({ meta: { _article_redirect_url: newLink } });
    } else {
      console.error('Dispatch function is not available.');
    }
  };

  const postType = select('core/editor').getCurrentPostType();
  if (postType !== 'article') {
    return null; 
  }

  return (
    <PluginDocumentSettingPanel
      name="cahnrs-article-external-link"
      title="External Link"
      className="cahnrs-article-external-link"
    >
      <div>
        <p>Add the link of the external post below.</p>
        <TextControl
          label="External Link URL"
          value={externalLink}
          onChange={(newValue) => {
            setExternalLink(newValue);
            updatePostWithLink(newValue);
          }}
        />
      </div>
    </PluginDocumentSettingPanel>
  );
};

registerPlugin('cahnrs-article-external-link', {
  render: cahnrsArticleExternalLink,
});
