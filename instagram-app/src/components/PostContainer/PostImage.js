import React from 'react';
import './PostContainer.css';

export default ({image}) => (
  <div className='post-image'>
    <img 
      alt='postimage'
      src={image}  
    />
  </div>
);