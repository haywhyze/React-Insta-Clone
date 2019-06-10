import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';
import CommentSection from '../CommentSection/CommentSection';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

const Postcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 40rem;
  margin: 4rem auto;
  justify-content: space-between;
  border: 1px solid #ddd;
  background-color: #fff;
`

const PostContainer = ({ data, addNewComment, index, likePost }) => (
  <Postcontainer>
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
  </Postcontainer>
);

export default PostContainer;

PostContainer.propTypes = {
  data: pt.object.isRequired
}