import React from 'react';
import './mainPage.scss';
import TopSlider from '../../components/TopSliderBlock/TopSlider.jsx';
import axios from 'axios';
import Rated from '../../components/RatedBlock/Rated';

const MainPage = () => {
  const [isData, setData] = React.useState('');

  const apiKey = 'aa3b2968-fe7d-4ce8-8f24-57870b765ead';

  const fetchData = async () => {
    try {
      const response = await axios.get('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
        headers: {
          'X-API-KEY': apiKey,
          'Content-Type': 'application/json',
        },
      });

      // Обработайте ответ здесь
      setData(response.data);
    } catch (error) {
      // Обработайте ошибку здесь
      console.error(error);
    }
  };
  console.log(isData);
  React.useEffect(() => {
    // fetchData();
  }, []);

  return (
    <>
      <TopSlider></TopSlider>
      <div className='container'>
        <div className='top wrapper'>
          <Rated type={'top'} isData={isData}></Rated>
        </div>
        <div className='top wrapper'>
          <Rated type={'best'} isData={isData}></Rated>
        </div>
        <div className='top wrapper'>
          <Rated type={'await'} isData={isData}></Rated>
        </div>
      </div>
    </>
  );
};

export default MainPage;
