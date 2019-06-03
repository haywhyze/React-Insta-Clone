import React from 'react';
import './PostContainer.css';

export default ({username, thumbnail}) => (
  <div className='post-header'>
    <img
      alt='thumbnail'
      src={thumbnail}
    />
    <h4>{username}</h4>
  </div>
);