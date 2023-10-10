import './rated.scss';
import axios from 'axios';
import React from 'react';

const Rated = ({ type, isData }) => {
  const typeTitle = {
    best: 'Топ лучших фильмов',
    top: 'Топ популярных фильмов',
    await: 'Ожидаемые фильмы',
  };

  return (
    <div className='rate'>
      <h2>{typeTitle[type]}</h2>
      <div className='card'>
        <div className='card-block'>
          <img
            src='https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg'
            alt=''
          />
          <div className='text'>
            <div>
              <span className='title'>Джон Уик 4</span>
              <span className='year'>2024</span>
            </div>
            <button>Трейлер</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rated;
