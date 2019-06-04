import React, { Component } from 'react';
import pt from 'prop-types';

class PostFooter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      liked: false,
    }
  }

  likePost = (e, index) => {
    e.preventDefault();
    this.props.likePost(index, this.state.liked);
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    return (
      <div className='post-footer'>
        <img 
            className='like-post'
            onClick={(e) => this.likePost(e, this.props.index)}
            alt='love'
            src={!this.state.liked ? 
              `https://image.flaticon.com/icons/svg/149/149217.svg`:
              `https://image.flaticon.com/icons/svg/148/148836.svg`
            }
          />
          <img 
            className='invert'
            alt='chat' 
            src={`https://image.flaticon.com/icons/svg/130/130958.svg`}
          />
          <h4>{this.props.likes} likes</h4>
      </div>
    );
  }
}

export default PostFooter;

PostFooter.defaultProps = {
  likes: 0,
}

PostFooter.propTypes = {
  likes: pt.number,
}