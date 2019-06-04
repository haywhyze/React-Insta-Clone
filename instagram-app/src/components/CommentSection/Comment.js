import React from 'react';
import './Comments.css';

export default ({ data }) => (
  <div className='comments'>
    <h4>{data.username}</h4>
    <p>&nbsp;{data.text}</p>
  </div>
);