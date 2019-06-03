import React from 'react';
import uuidv1 from 'uuid/v1';
import Comment from './Comment';

export default ({ comments }) => (
  <div>
    {comments.map(comment => <div key={uuidv1()}><Comment data={comment}/></div>)}
  </div>
);