import React from 'react';
import './single.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleData, getSingleStaff } from '../../Redux/singlePageSlice';
import { useParams } from 'react-router-dom';

const Single = () => {
  const singleData = useSelector((state) => state.singleSlice.singleData);
  const singleDirector = useSelector((state) => state.singleSlice.singleDirector);
  const singleActor = useSelector((state) => state.singleSlice.singleActor);

  const dispatch = useDispatch();
  const { id } = useParams();

  window.scrollTo(0, 0);
  const getMinActor = () => {
    if (singleActor.length - 1 > 5) {
      return singleActor.slice(0, 6);
    } else return singleActor;
  };
  const isActor = getMinActor();
  console.log(isActor);
  React.useEffect(() => {
    dispatch(getSingleData(id));
    dispatch(getSingleStaff(id));
    console.log(isActor);
  }, [dispatch, id]);

  return (
    <div className='container single-wrapper'>
      <div className='top-single'>
        <div className='img-single'>
          <img src={singleData.posterUrl} alt='' />
        </div>
        <div className='present'>
          <div>
            <h1>{singleData.nameRu}</h1>
            <h2>{singleData.year}</h2>
            <h3>{singleData.nameEn}</h3>
            <span>{singleData.description}</span>
          </div>
          <iframe width='560' height='315'></iframe>
        </div>
      </div>
      <div className='level'></div>
      <div className='body-single'>
        <div className='staff'>
          <span className='staff-block'>
            Режиссер:
            {singleDirector.map(
              (obj, index) =>
                obj && (
                  <span className='staff-text' key={obj.id}>
                    {obj.nameRu}
                    {index < singleDirector.length - 1 ? ',' : ''}
                  </span>
                ),
            )}
          </span>
          <span className='staff-block'>Продюсер:</span>
        </div>
        <div className='actors'>
          <span className='span-actors'>Актеры:</span>

          <div className='actors-block'>
            {isActor &&
              isActor.map((actor, index) => (
                <div key={actor.staffId} className='actors-card'>
                  <div className='img'>
                    <img src={actor.posterUrl} alt='' />
                  </div>
                  <div className='actor-name'>
                    <span>{actor.nameRu}</span>
                    <span id='sub-name'>{actor.description}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className='bottom'>
        <span>Скриншоты</span>
        <div className='img-block'>
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
