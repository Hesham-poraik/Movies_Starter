import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({search}) => {
  return (
    <div>
      <header>
        <div className='container'>
          <Link to='/'>
            <h2>معرض الأفلام</h2>
          </Link>
          <div className='search'>
            <input type='text' placeholder='ابحث...' onChange={(e)=> search(e.target.value)}/>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
