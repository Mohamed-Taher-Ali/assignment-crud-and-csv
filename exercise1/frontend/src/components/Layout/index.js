import React from 'react';
import Header from '../Header'
import './layout.scss';

function Layout({children}) {
  return (
    <div className="my-layout">
      <Header title='CRUD-simple' />
      <div id='my-body-wrapper' className='my-body-wrapper'>
      <div className='my-body'>
        {children}
      </div>
      </div>
    </div>
  );
}

export default Layout;
