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
      comments: this.props.comments,
      newComment: '',
    }
  }

  handleComment = (e) => {
    this.setState({
      newComment: e.target.value,
    })
  }

  render() {
    return(
      <div className='comments-section'>
        {this.state.comments.map(comment => <div key={uuidv1()}><Comment data={comment}/></div>)}
        <p className='timestamp'>
          {moment(this.props.timestamp, 'MMMM Do YYYY, h:mm:ss a').fromNow()}
        </p>
        <form>
          <input 
            className='comment-input' 
            type='text' 
            placeholder='Add a Comment...'
            value={this.state.newComment}
            onChange={this.handleComment}
          />
          <button 
            disabled={!this.state.newComment.trim() ? true : false}
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