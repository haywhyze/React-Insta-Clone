import React, { Component } from 'react';
import pt from 'prop-types';
import uuidv1 from 'uuid/v1';
import moment from 'moment';
import styled from 'styled-components';
import Comment from './Comment';

const Commentsection = styled.div`
  margin: -1rem 0 1rem 1rem;
  width: calc(100% - 2rem);

  .comment-input {
    border: none;
    border-top: 1px solid rgba(0,0,0,.1);
    width: calc(100% + 1rem);
    padding: 1.5rem 0;
    margin: 0 -1rem -1rem -1rem;
    padding: 0;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    padding-right: 0;
    padding-left: 1rem;
    font-size: 1rem;
  }

  .comment-input:focus {
    outline: none;
  }

  .comment-input::placeholder {
    color: #aaa;
    font-size: .85rem;
  }

  .timestamp {
    text-transform: uppercase;
    font-size: 70%;
    color: #aaa;
  }

  .comment-form {
    position: relative;
  }

  .comment-button {
    border: none;
    font-weight: bold;
    font-size: 1rem;
    position: absolute;
    background: transparent;
    right: 0;
    top: 1.3rem;
    color: rgb(56, 151, 240);
    cursor: pointer;
  }

  .comment-button:disabled {
    color: rgba(56, 151, 240, .3);
  }

  .comment-button:focus {
    outline: none;
  }
`

class CommentSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }

  handleComment = (e) => {
    this.setState({
      comment: e.target.value,
    })
  }

  addNewComment = (e) => {
    e.preventDefault();
    this.props.addNewComment(this.props.index, this.state.comment);
    this.setState({
      comment: ''
    })
  }

  render() {
    return(
      <Commentsection>
        {this.props.comments.map(comment => 
          <div key={uuidv1()}>
            <Comment data={comment}/>
          </div>)}
        <p className='timestamp'>
          {moment(this.props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
        </p>
        <form className='comment-form'>
          <input 
            className='comment-input' 
            type='text' 
            placeholder='Add a Comment...'
            value={this.state.comment}
            onChange={this.handleComment}
          />
          <button
            className='comment-button'
            onClick={this.addNewComment}
            disabled={!this.state.comment.trim() ? true : false}
          >Post</button>
        </form>
      </Commentsection>
    );
  }
}

export default CommentSection;

CommentSection.defaultProps = {
  timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
}

CommentSection.propTypes = {
  comments: pt.array,
  timestamp: pt.string,
}