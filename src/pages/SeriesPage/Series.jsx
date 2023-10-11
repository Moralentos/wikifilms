import React from 'react';
import styles from './series.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getSeries } from '../../Redux/seriesPageSlice/';

const Series = () => {
  const seriesData = useSelector((state) => state.seriesSlice.series.films);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // fetchData();
    dispatch(getSeries());
    console.log(seriesData);
  }, []);

  return (
    <div className={`container`}>
      <div className={styles.wrapper}>
        <div className={styles.card_block}>
          {seriesData &&
            seriesData.map((item, index) => {
              return (
                <div key={index} className={styles.card}>
                  <div className={styles.img}>
                    <img src={item.posterUrlPreview} alt='' />
                    <div className={styles.card_text}>
                      <span>{`${item.year}, ${item.countries[0].country}, ${item.genres[0].genre}`}</span>

                      <span>{`Длительность: ${item.filmLength}`} </span>
                    </div>
                  </div>
                  <span>{item.nameRu}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Series;
