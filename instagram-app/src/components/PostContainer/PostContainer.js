import React from 'react';
import pt from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';
import './PostContainer.css';

const PostContainer = ({ data }) => (
  <div className='post-container'>
    <PostHeader username={data.username} thumbnail={data.thumbnailUrl}/>
    <PostImage image={data.imageUrl}/>
    <PostFooter likes={data.likes}/>
    <CommentSection comments={data.comments} timestamp={data.timestamp} />
  </div>
);

export default PostContainer;

PostContainer.propTypes = {
  data: pt.object.isRequired
}