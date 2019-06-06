import React, { Component } from 'react';
import pt from 'prop-types';
import uuidv1 from 'uuid/v1';
import moment from 'moment';
import Comment from './Comment';
import './Comments.css';

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
      <div className='comments-section'>
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
      </div>
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