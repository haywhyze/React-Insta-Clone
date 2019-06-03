import React from 'react';
import './SearchBar.css';

export default () => (
  <div className='search-bar'>
    <div className='logo-bar'>
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
    </div>
    <div>
      <input 
        className='search-input' 
        type='text'
        placeholder='Search' />
    </div>
    <div className='menu-icon-bar'>
      <img 
        className=''
        alt='Instagram' 
        src='https://image.flaticon.com/icons/svg/54/54642.svg'
      />
      <img 
        className=''
        alt='Instagram' 
        src='https://image.flaticon.com/icons/svg/63/63263.svg'
      />
      <img 
        className=''
        alt='Instagram' 
        src='http://cdn.onlinewebfonts.com/svg/img_210318.png'
      />
    </div>
  </div>
);