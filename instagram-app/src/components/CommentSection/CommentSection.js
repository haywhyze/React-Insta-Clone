import React from 'react';
import pt from 'prop-types';
import uuidv1 from 'uuid/v1';
import moment from 'moment';
import Comment from './Comment';
import './Comments.css';

const CommentSection = ({ comments, timestamp }) => (
  <div className='comments-section'>
    {comments.map(comment => <div key={uuidv1()}><Comment data={comment}/></div>)}
    <p className='timestamp'>
      {moment(timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
    </p>
    <input className='comment-input' type='text' placeholder='Add a Comment...'/>
  </div>
);

export default CommentSection;

CommentSection.defaultProps = {
  timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
}

CommentSection.propTypes = {
  comments: pt.array,
  timestamp: pt.string,
}