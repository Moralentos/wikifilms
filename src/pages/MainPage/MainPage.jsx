import React from 'react';
import styles from './mainPage.module.scss';
import TopSlider from '../../components/TopSliderBlock/TopSlider.jsx';
import axios from 'axios';
import Rated from '../../components/RatedBlock/Rated';
import { useSelector, useDispatch } from 'react-redux';
import { getSeries } from '../../Redux/seriesPageSlice/';
import { getMoviesMainPage, setMainMoviesPage } from '../../Redux/mainPageSlice/';

const MainPage = () => {
  // const [isData, setData] = React.useState('');
  const dispatch = useDispatch();
  const mainMovies = useSelector((state) => state.mainSlice.mainMovies.items);

  const apiKey = 'aa3b2968-fe7d-4ce8-8f24-57870b765ead';

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
  //       headers: {
  //         'X-API-KEY': apiKey,
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     // Обработайте ответ здесь
  //     setData(response.data);
  //   } catch (error) {
  //     // Обработайте ошибку здесь
  //     console.error(error);
  //   }
  // };

  // console.log(isData);
  React.useEffect(() => {
    dispatch(getMoviesMainPage());
  }, [dispatch]);
  console.log(mainMovies);

  return (
    <>
      <TopSlider></TopSlider>
      <div className='container'>
        <div className={`${styles.top} ${styles.wrapper}`}>
          <Rated mainMovies={mainMovies} />
        </div>
      </div>
    </>
  );
};

export default MainPage;
