import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';

const Postimage = styled.div`
  img {
    margin-top: -1rem;
    width: 100%;
  }
`

const PostImage = ({image}) => (
  <Postimage>
    <img 
      alt='postimage'
      src={image}  
    />
  </Postimage>
);

export default PostImage;

PostImage.propTypes = {
  image: pt.string.isRequired,
}