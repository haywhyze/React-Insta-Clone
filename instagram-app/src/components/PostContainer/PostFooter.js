import React from 'react';

export default ({likes}) => (
  <div className='post-footer'>
     <img 
        className=''
        alt='love' 
        src='https://image.flaticon.com/icons/svg/149/149217.svg'
      />
      <img 
        className='invert'
        alt='chat' 
        src='https://image.flaticon.com/icons/svg/130/130958.svg'
      />
      <h4>{likes} likes</h4>
  </div>
);