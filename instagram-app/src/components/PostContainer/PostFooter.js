import React, { Component } from 'react';
import pt from 'prop-types';
import styled from 'styled-components';

const Postfooter = styled.div`
  margin: 1rem;

  h4 {
    margin: .5rem 0;
  }

  img {
    cursor: pointer;
    width: 1.5rem;
    margin-right: 1rem;
  }

  .like-post-grow {
    animation: grow .2s ease-in-out;
  }

  .like-post {
    animation: test .2s ease-in-out;
  }

  @keyframes grow {
    from {
        transform: scale(1);
      }
    to {
        transform: scale(1.3);
      }
  }

  @keyframes test {
    from {
        transform: scale(1);
      }
    to {
        transform: scale(1.2);
      }
  }
`

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
      <Postfooter>
        <img 
            className={!this.state.liked ? 'like-post' : 'like-post-grow'}
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
      </Postfooter>
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