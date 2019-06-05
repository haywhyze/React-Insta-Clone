import React from 'react';
import pt from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import './PostContainer.css';

const PostContainer = ({ data, addNewComment, index, likePost }) => (
  <div className='post-container'>
    <PostHeader 
      username={data.username} 
      thumbnail={data.thumbnailUrl}
    />
    <PostImage 
      image={data.imageUrl}
    />
    <PostFooter 
      likes={data.likes}
      likePost={likePost}
      index={index}
    />
    <CommentSection 
      comments={data.comments} 
      timestamp={data.timestamp} 
      addNewComment={addNewComment}
      index={index}
    />
  </div>
);

export default PostContainer;

PostContainer.propTypes = {
  data: pt.object.isRequired
}