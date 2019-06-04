import React from 'react';
import pt from 'prop-types';
import './PostContainer.css';

const PostImage = ({image}) => (
  <div className='post-image'>
    <img 
      alt='postimage'
      src={image}  
    />
  </div>
);

export default PostImage;

PostImage.propTypes = {
  image: pt.string.isRequired,
}