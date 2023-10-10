import React from 'react';
import './TopSlider.scss';
const TopSlider = () => {
  return (
    <div className='slide'>
      <div className='left'>
        <img
          src='https://www.pixel4k.com/wp-content/uploads/2019/12/the-witcher-poster-2019-3840x2160-1.jpg'
          alt=''
        />
        <div className='img-block'>
          <div className='text'>
            <span className='title'>Ведьмак</span>
            <span className='desc'>
              Первый сезон фэнтезийного драматического сериала «Ведьмак», премьера которого
              состоялась на стриминговом сервисе Netflix 20 декабря 2019 года, включает 8 эпизодов и
              основан на цикле произведений Анджея Сапковского о ведьмаке Геральте.
            </span>
          </div>
          <div className='date'>
            <span className='hours'>Hours</span> <span className='dates'>Date</span>
          </div>
          <div className='btn'>
            <button>Трейлер</button>
            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
