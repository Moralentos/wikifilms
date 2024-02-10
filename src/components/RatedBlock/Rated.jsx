/* eslint-disable react/prop-types */
import './rated.scss';
// import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const Rated = ({ mainMovies }) => {
  // const typeTitle = {
  //   best: 'Топ лучших фильмов',
  //   top: 'Топ популярных фильмов',
  //   await: 'Ожидаемые фильмы',
  // };

  if (!mainMovies) {
    return (
      <div className='rate'>
        <h2>Топ лучших фильмов</h2>
        <span>Загрузка...</span>
      </div>
    );
  }

  return (
    <div className='rate'>
      <h2>Топ лучших фильмов</h2>
      <div className='card'>
        {mainMovies.map((elem, index) => (
          <div key={index} className='card-block'>
            <Link to={`/movies/${elem.kinopoiskId}`}>
              <img src={elem.posterUrlPreview} alt='' />
            </Link>
            <div className='text'>
              <div className='card_info'>
                <span className='title'>{elem.nameRu}</span>
                <span className='year'>{elem.year}</span>
              </div>
              <button>Трейлер</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rated;
