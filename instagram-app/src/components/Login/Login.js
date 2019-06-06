import React, { Component } from 'react';
import './Login.css';

class PostsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  handleLoginInput = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  login = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      username: '',
      password: ''
    })
  }

  render () {
    return (
    <div className='login-outer-container'>
      <div className='login-container'>
        <img 
          id='insta-text-login' 
          alt='Instagram' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/200px-Instagram_logo.svg.png'
        />
        <form onSubmit={this.login}>
          <input 
            className='login-input' 
            type='text' 
            placeholder='Username'
            name='username'
            value={this.state.username}          
            onChange={this.handleLoginInput}
          />
          <input 
            className='login-input' 
            type='password' 
            placeholder='Password'
            name='password'
            value={this.state.password}
            onChange={this.handleLoginInput}
          />
          <button
            onClick={this.login}
            disabled={!this.state.username.trim() ? true : false}
          >Log In</button>
        </form>
      </div>
    </div>
  );
  }
}

export default PostsPage;
