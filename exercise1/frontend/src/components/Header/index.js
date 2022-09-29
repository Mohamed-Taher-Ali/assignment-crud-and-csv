import React from 'react';
import './header.scss';

function Header({
  title=''
}) {
  return (
    <div className='header'>
      {title}
    </div>
  );
}

export default Header;
