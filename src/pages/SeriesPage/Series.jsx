import React from 'react';
import styles from './series.module.scss';

const Series = () => {
  return (
    <div className={`container`}>
      <div className={styles.wrapper}>
        <div className={styles.card_block}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img
                src='https://kinotv.ru/upload/setka-editor/0f0/vah7z549hi2a1vz2dz8yiocuzlfrv9po.jpeg'
                alt=''
              />
              <span>SUPER TEXT</span>
            </div>
            <span>Джон уик</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Series;
