import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

export default ({ data }) => (
  <div>
    {data.username}
    <CommentSection comments={data.comments} />
  </div>
);