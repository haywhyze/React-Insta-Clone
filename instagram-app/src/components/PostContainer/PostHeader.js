import React from 'react';
import pt from 'prop-types';
import './PostContainer.css';

const PostHeader = ({username, thumbnail}) => (
  <div className='post-header'>
    <img
      alt='thumbnail'
      src={thumbnail}
    />
    <h4>{username}</h4>
  </div>
);

export default PostHeader;

PostHeader.propTypes = {
  username: pt.string.isRequired,
  thumbnail: pt.string.isRequired
}