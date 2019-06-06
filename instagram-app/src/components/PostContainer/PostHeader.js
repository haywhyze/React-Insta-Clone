import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';

const Postheader = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1rem;
  padding: 1rem;

  img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    margin-right: .5rem;
  }
`

const PostHeader = ({username, thumbnail}) => (
  <Postheader>
    <img
      alt='thumbnail'
      src={thumbnail}
    />
    <h4>{username}</h4>
  </Postheader>
);

export default PostHeader;

PostHeader.propTypes = {
  username: pt.string.isRequired,
  thumbnail: pt.string.isRequired
}