import React from "react";
import styles from "./movies.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { getMovies, setMoviesPage } from "../../Redux/moviesPageSlice/";
import { Link } from "react-router-dom";
import Paginator from "../../components/Paginator/Paginator";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const moviesData = useSelector((state) => state.moviesSlice.movies.items);
  const page = useSelector((state) => state.moviesSlice.moviesPage);
  const totalPages = useSelector(
    (state) => state.moviesSlice.movies.totalPages
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { pageNum = 1 } = useParams();

  React.useEffect(() => {
    navigate(`/films/page/${page}`);

    dispatch(getMovies(pageNum));
    console.log(moviesData);
  }, [page, pageNum, totalPages]);

  React.useEffect(() => {
    dispatch(setMoviesPage(pageNum));
  }, [pageNum]);

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
                      <img src={item.posterUrlPreview} alt="" />
                      <div className={styles.card_text}>
                        <span>{`${item.year}, ${item.countries[0].country}, ${item.genres[0].genre}`}</span>

                        {item.filmLength && (
                          <span>{`Длительность: ${item.filmLength}`} </span>
                        )}
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
          isCount={page}
          setCount={setMoviesPage}
        ></Paginator>
      </div>
    </div>
  );
};

export default Movies;
