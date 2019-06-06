import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import '../../App.css';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    }
  }

  addNewComment = (index, comment) => {
    if(!comment) return
    const newComment = {
      username: 'haywhyze',
      text: comment,
    }
    this.setState(state => {
      return {
        data: state.data.map((post, mapIndex) => {
          if (index === mapIndex)
            post.comments = post.comments.concat(newComment);
          return post;
        })
      }
    })
  }

  likePost = (index, liked) => {
    
    const newLikes = liked ? 
      this.state.data[index].likes - 1 : 
      this.state.data[index].likes + 1;
    
    this.setState(state => {
      return {
        data: state.data.map((post, mapIndex) => {
          if (index === mapIndex)
            post.likes = newLikes
          return post;
        })
      }
    })
  }

  filterUsers = (query) => {
    this.setState(state => {
      return {
        data: dummyData,
      }
    })
    this.setState(state => {
      return {
        data: state.data.filter(post => 
          post.username.includes(query)
        )
      }
    })
  }

  loadStateFromLocalStorage = () => {
    this.setState(JSON.parse(localStorage.getItem('instaCloneState')));
  }

  storeStateInLocalStorage = () => {
    localStorage.setItem('instaCloneState', JSON.stringify(this.state))
  }
  
  componentDidUpdate() {
    this.storeStateInLocalStorage();
  }

  componentDidMount() {
    this.setState({
      data: dummyData,
    })
    if (localStorage.instaCloneState)
      this.loadStateFromLocalStorage();
  }

  render () {
    return (
    <div>
      <SearchBar filterUsers={this.filterUsers} />
      <main className='feed'>
        {this.state.data.map((data, index) => <div key={data.imageUrl}>
          <PostContainer 
            data={data} 
            addNewComment={this.addNewComment}
            index={index}
            likePost={this.likePost}
          />
          </div>)}
      </main>
    </div>
  );
  }
}

export default PostsPage;
