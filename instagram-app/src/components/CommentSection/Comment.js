import React from 'react';
import pt from 'prop-types';
import styled from 'styled-components';

const CommentStyled = styled.div`
  margin: .5rem 0;

  h4, p {
    margin: 0;
    display: inline-block;
  }
`

const Comment = ({ data }) => (
  <CommentStyled>
    <h4>{data.username}</h4>
    <p>&nbsp;{data.text}</p>
  </CommentStyled>
);
export default Comment;

Comment.propTypes = {
  data: pt.object,
}