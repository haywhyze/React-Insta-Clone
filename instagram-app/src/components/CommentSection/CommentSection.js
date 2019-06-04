import React from 'react';
import uuidv1 from 'uuid/v1';
import moment from 'moment';
import Comment from './Comment';
import './Comments.css';

export default ({ comments, timestamp }) => (
  <div className='comments-section'>
    {comments.map(comment => <div key={uuidv1()}><Comment data={comment}/></div>)}
    <p className='timestamp'>
      {moment(timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
    </p>
    <input type='text' placeholder='Add a Comment...'/>
  </div>
);