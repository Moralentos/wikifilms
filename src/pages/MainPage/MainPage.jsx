import React from 'react';
import './mainPage.scss';
import TopSlider from '../../components/TopSliderBlock/TopSlider.jsx';
import axios from 'axios';
import Rated from '../../components/RatedBlock/Rated';

const MainPage = () => {
  return (
    <>
      <TopSlider></TopSlider>
      <div className='container top wrapper'>
        <Rated title={'Топ лучших'} type={'film'}></Rated>
      </div>
    </>
  );
};

export default MainPage;
