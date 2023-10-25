import React from "react";
import styles from "./series.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getSeries } from "../../Redux/seriesPageSlice/";
import { Link } from "react-router-dom";
const Series = () => {
  const seriesData = useSelector((state) => state.seriesSlice.series.items);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSeries());
  }, [dispatch]);

  return (
    <div className={`container`}>
      <div className={styles.wrapper}>
        <div className={styles.card_block}>
          {seriesData && seriesData.length > 0 ? (
            seriesData.map((item, index) => (
              <Link key={index} to={`/film/${item.kinopoiskId}`}>
                <div className={styles.card}>
                  <div className={styles.img}>
                    <img src={item.posterUrlPreview} alt="" />
                    <div className={styles.card_text}>
                      <span>{`${item.year}, ${item.countries[0].country}, ${item.genres[0].genre}`}</span>
                      <span>{`Длительность: ${item.filmLength}`} </span>
                    </div>
                  </div>
                  <span>{item.nameRu}</span>
                </div>
              </Link>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Series;
