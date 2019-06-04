import React from 'react';
import uuidv1 from 'uuid/v1';
import Comment from './Comment';
import './Comments.css';


export default ({ comments }) => (
  <div className='comments-section'>
    {comments.map(comment => <div key={uuidv1()}><Comment data={comment}/></div>)}
    <input type='text' placeholder='Add a Comment...'/>
  </div>
);