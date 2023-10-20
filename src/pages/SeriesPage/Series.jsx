import React from 'react';
import styles from './series.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getSeries, setCount } from '../../Redux/seriesPageSlice/';
import { Link } from 'react-router-dom';
import Paginator from '../../components/Paginator/Paginator';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Series = () => {
  const seriesData = useSelector((state) => state.seriesSlice.series.items);
  const totalPages = useSelector((state) => state.seriesSlice.series.totalPages);
  const isCount = useSelector((state) => state.seriesSlice.isCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [isCount, setCount] = React.useState(1);
  console.log(isCount);
  const { pageNum = 1 } = useParams();

  React.useEffect(() => {
    navigate(`/series/page/${isCount}`);

    dispatch(getSeries(pageNum));
    console.log(seriesData);
  }, [isCount, pageNum, totalPages]);

  React.useEffect(() => {
    dispatch(setCount(pageNum));
  }, [pageNum]);

  return (
    <div className={`container`}>
      <div className={styles.wrapper}>
        <div className={styles.card_block}>
          {seriesData &&
            seriesData.map((item, index) => {
              return (
                <Link key={index} to={`/series/${item.kinopoiskId}`}>
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
        <Paginator
          pages={totalPages}
          elemPage={5}
          isCount={isCount}
          setCount={setCount}
        ></Paginator>
      </div>
    </div>
  );
};

export default Series;
