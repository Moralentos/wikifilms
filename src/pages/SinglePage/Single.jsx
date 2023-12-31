import React from 'react';
import styles from './single.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleData, getSingleStaff, fetchImage } from '../../Redux/singlePageSlice';
import { useParams } from 'react-router-dom';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Single = () => {
  const singleData = useSelector((state) => state.singleSlice.singleData);
  const singleDirector = useSelector((state) => state.singleSlice.singleDirector);
  const singleActor = useSelector((state) => state.singleSlice.singleActor);
  const singleImage = useSelector((state) => state.singleSlice.singleImage);
  const statusImage = useSelector((state) => state.singleSlice.statusImage);

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

  const getImage = async (id) => {
    dispatch(fetchImage(id));
  };

  React.useEffect(() => {
    dispatch(getSingleData(id));
    dispatch(getSingleStaff(id));
    getImage(id);
    console.log(isActor);
  }, [dispatch, id]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const imageLoaded = () => {
    if (statusImage === 'loading') {
      return <div>Loading...</div>;
    }

    if (statusImage === 'error') {
      return <div>Error...</div>;
    }

    if (statusImage === 'success') {
      return (
        <div className={styles.img_block}>
          <Carousel responsive={responsive}>
            {singleImage.map((elem, index) => (
              <div key={index} className={styles.bottom_img}>
                <img src={elem.previewUrl} alt='' />
              </div>
            ))}
          </Carousel>
        </div>
      );
    }
  };

  return (
    <div className={`container ${styles.single_wrapper}`}>
      <div className={styles.top_single}>
        <div className={styles.img_single}>
          <img src={singleData.posterUrl} alt='' />
        </div>
        <div className={styles.present}>
          <div>
            <h1>{singleData.nameRu}</h1>
            <h2>{singleData.year}</h2>
            <h3>{singleData.nameEn}</h3>
            <span>{singleData.description}</span>
          </div>
          <iframe width='560' height='315'></iframe>
        </div>
      </div>
      <div className={styles.level}></div>
      <div className={styles.body_single}>
        <div className={styles.staff}>
          <span className={styles.staff_block}>
            Режиссер:
            {singleDirector.map(
              (obj, index) =>
                obj && (
                  <span className={styles.staff_text} key={obj.id}>
                    {obj.nameRu}
                    {index < singleDirector.length - 1 ? ',' : ''}
                  </span>
                ),
            )}
          </span>
          <span className={styles.staff_block}>Продюсер:</span>
        </div>
        <div className={styles.actors}>
          <span className={styles.span_actors}>Актеры:</span>

          <div className={styles.actors_block}>
            {isActor &&
              isActor.map((actor) => (
                <div key={actor.staffId} className={styles.actors_card}>
                  <div className={styles.img}>
                    <img src={actor.posterUrl} alt='' />
                  </div>
                  <div className={styles.actor_name}>
                    <span>{actor.nameRu}</span>
                    <span id={styles.sub_name}>{actor.description}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>Скриншоты</span>
        {imageLoaded()}
      </div>
    </div>
  );
};

export default Single;
