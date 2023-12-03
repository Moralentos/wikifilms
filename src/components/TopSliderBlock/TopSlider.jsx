import React from 'react';
import { Link } from 'react-router-dom';
import styles from './topSlider.module.scss';
const TopSlider = () => {
  return (
    <div className={styles.slide}>
      <div className={styles.left}>
        <img
          src='https://www.pixel4k.com/wp-content/uploads/2019/12/the-witcher-poster-2019-3840x2160-1.jpg'
          alt=''
        />
        <div className={styles.img_block}>
          <div className={styles.text}>
            <span className={styles.title}>Ведьмак</span>
            <span className={styles.desc}>
              Первый сезон фэнтезийного драматического сериала «Ведьмак», премьера которого
              состоялась на стриминговом сервисе Netflix 20 декабря 2019 года, включает 8 эпизодов и
              основан на цикле произведений Анджея Сапковского о ведьмаке Геральте.
            </span>
          </div>
          <div className={styles.date}>
            <span className={styles.hours}>Hours</span> <span className={styles.dates}>Date</span>
          </div>
          <div className={styles.btn}>
            <button id={styles.trailer}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  d='M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
              Трейлер
            </button>
            <Link to={`/series/1044004`}>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                  />
                </svg>
                Подробнее
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSlider;
