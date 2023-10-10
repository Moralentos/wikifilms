import React from 'react';
import './single.scss';

const Single = () => {
  return (
    <div className='container single-wrapper'>
      <div className='top-single'>
        <div>
          <img
            src='https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg'
            alt=''
          />
        </div>
        <div className='present'>
          <div>
            <h1>Джон уик</h1>
            <h3>John Wick</h3>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia dolorum veniam eius
              asperiores harum recusandae praesentium, cupiditate sint consectetur laborum alias
              maiores! Magni officia quas, itaque provident eos voluptate adipisci.
            </span>
          </div>
          <iframe width='560' height='315'></iframe>
        </div>
      </div>
      <div className='body-single'>
        <div className='staff'>
          <span>Режиссер</span>
          <span>Продюсер</span>
        </div>
        <div className='actors'>
          <span className='span-actors'>Актеры:</span>
          <div>
            <div>
              <div className='img'>
                <img
                  src='https://cdn.7days.ru/upload/images/ddc/f95ca7b798f607b168f3fa1083dcf.jpg'
                  alt=''
                />
              </div>
              <span>Джон Уик</span>
            </div>
            <div>
              <div className='img'>
                <img
                  src='https://cdn.7days.ru/upload/images/ddc/f95ca7b798f607b168f3fa1083dcf.jpg'
                  alt=''
                />
              </div>
              <span>Джон Уик</span>
            </div>
            <div>
              <div className='img'>
                <img
                  src='https://cdn.7days.ru/upload/images/ddc/f95ca7b798f607b168f3fa1083dcf.jpg'
                  alt=''
                />
              </div>
              <span>Джон Уик</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <span>Скриншоты</span>
        <div>
          <div className='bottom-img'>
            <img
              src='https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg'
              alt=''
            />
          </div>
          <div className='bottom-img'>
            <img
              src='https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg'
              alt=''
            />
          </div>
          <div className='bottom-img'>
            <img
              src='https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg'
              alt=''
            />
          </div>
          <div className='bottom-img'>
            <img
              src='https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
