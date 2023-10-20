import React from 'react';
import styles from './movies.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../../Redux/moviesPageSlice/';
import { Link } from 'react-router-dom';

const Movies = () => {
  const moviesData = useSelector((state) => state.moviesSlice.movies.items);
  const dispatch = useDispatch();
  React.useEffect(() => {
    // fetchData();
    dispatch(getMovies());
    console.log(moviesData);
  }, []);

  return (
    <div className={`container`}>
      <div className={styles.wrapper}>
        <div className={styles.card_block}>
          {moviesData &&
            moviesData.map((item, index) => {
              return (
                <Link key={index} to={`/movies/${item.kinopoiskId}`}>
                  <div className={styles.card}>
                    <div className={styles.img}>
                      <img src={item.posterUrlPreview} alt='' />
                      <div className={styles.card_text}>
                        <span>{`${item.year}, ${item.countries[0].country}, ${item.genres[0].genre}`}</span>

                        {item.filmLength && <span>{`Длительность: ${item.filmLength}`} </span>}
                      </div>
                    </div>
                    <span>{item.nameRu}</span>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
