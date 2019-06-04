import React from 'react';
import pt from 'prop-types';
import './Comments.css';

const Comment = ({ data }) => (
  <div className='comments'>
    <h4>{data.username}</h4>
    <p>&nbsp;{data.text}</p>
  </div>
);
export default Comment;

Comment.propTypes = {
  data: pt.object,
}