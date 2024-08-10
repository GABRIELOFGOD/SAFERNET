// components/PreviewBlogPost.js
import React from 'react';

const PreviewBlogPost = ({ content, close }) => {
  return (
    <div className='preview-modal'>
      <button onClick={close} className='close-preview'>Close Preview</button>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PreviewBlogPost;
