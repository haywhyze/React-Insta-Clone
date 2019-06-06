import React, { Component } from 'react';
import styled from 'styled-components';
// import './SearchBar.css';

const NavBar = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 4;
`

const Searchbar = styled.div`
  display: flex;
  align-items: center;
  max-width: 60rem;
  margin: 0 auto;
  justify-content: space-between;
  padding: 1rem;
`

const LogoBar = styled.div`
  display: flex;
  align-items: center;

  #logo {
    width: 1.4rem;
    height: auto;
  }

  .divider {
    width: 1px;
    height: 1.7rem;
    background-color: black;
    margin: 0 1.2rem;
    transform: scaleX(.4);
  }

  #insta-text {
    width: 6.5rem;
  }
`

const MenuIconBar = styled.div`
  img {
    width: 1.3rem;
    margin-left: 2rem;
  }
`

const SearchInput = styled.input`
  text-align: center;
  padding: .3rem;
  width: 15rem;
  background: #fafafa;
  border: 1px solid #ddd;
  font-size: 1rem;
`

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    }
  }

  handleSearchInput = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  filterUsers = (e) => {
    e.preventDefault()
    this.setState({
      query: '',
    })
    this.props.filterUsers(this.state.query);
  }

  render() {
    return (
      <NavBar>
        <Searchbar>
          <LogoBar>
            <img 
              id='logo' 
              alt='Instagram logo' 
              src='https://seeklogo.com/images/I/instagram-logo-A807AD378B-seeklogo.com.png'
            />
            <div className='divider'></div>
            <img 
              id='insta-text' 
              alt='Instagram' 
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/200px-Instagram_logo.svg.png'
            />
          </LogoBar>
          <div>
            <form onSubmit={this.filterUsers}>
            <SearchInput
              value={this.state.query}
              onChange={this.handleSearchInput}
              type='text'
              placeholder='&#x1F50D;Search' 
            />
            </form>
          </div>
          <MenuIconBar>
            <img 
              className='invert'
              alt='compass' 
              src='https://image.flaticon.com/icons/svg/54/54642.svg'
            />
            <img 
              className=''
              alt='love' 
              src='https://image.flaticon.com/icons/svg/63/63263.svg'
            />
            <img 
              className=''
              alt='user' 
              src='http://cdn.onlinewebfonts.com/svg/img_210318.png'
            />
          </MenuIconBar>
        </Searchbar>
      </NavBar>
    )
  }
} 

export default SearchBar