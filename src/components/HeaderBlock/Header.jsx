// import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='wrapper container'>
        <div className='logo'>WikiFilms</div>
        <div className='nav-menu'>
          <ul>
            <li>
              {/* <a href='#'>Главная</a> */}
              <Link to={'/'}>Главная</Link>
            </li>
            <li>
              {/* <a href='#'>Фильмы</a> */}
              <Link to={'/film'}>Фильмы</Link>
            </li>
            <li>
              <a href='#'>Сериалы</a>
            </li>
          </ul>
        </div>
        <div className='search'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
          <input type='text' />
        </div>
      </div>
    </div>
  );
};

export default Header;
