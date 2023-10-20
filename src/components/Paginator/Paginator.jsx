import React from 'react';
import styles from './paginator.module.scss';
import { useDispatch } from 'react-redux';

const Paginator = ({ pages, elemPage, isCount, setCount }) => {
  const [isArr, setArr] = React.useState([]);
  const dispatch = useDispatch();

  // const pages = 13;
  // const elemPage = 5;
  const arrPage = Array.from({ length: pages + 1 }, (_, index) => index + 1);

  const sliceArrPage = () => {
    const sliceRight = arrPage
      .slice(0, elemPage % 2 ? isCount + elemPage / 2 : isCount + Math.round(elemPage / 2))
      .slice(
        elemPage % 2
          ? isCount - elemPage / 2 < 0
            ? 0
            : isCount - elemPage / 2
          : isCount - Math.floor(elemPage / 2) < 0
          ? 0
          : isCount - Math.floor(elemPage / 2),
        arrPage[arrPage.length - 2],
      );

    console.log(sliceRight);
    return sliceRight;
  };
  const handleCountButton = (i) => {
    dispatch(setCount(i));
    console.log(`PAGE ${i}`);
    console.log(arrPage);
  };
  React.useEffect(() => {
    setArr(sliceArrPage());
  }, [isCount, pages]);

  return (
    <div className={styles.paginator_block}>
      <div className={styles.wrapper}>
        <button
          onClick={() => dispatch(setCount(isCount - 1 < 1 ? 1 : isCount - 1))}
          className={styles.arrow}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
          </svg>
        </button>
        {isArr[0] !== arrPage[0] && (
          <button onClick={() => dispatch(setCount(1))} className={styles.more}>
            ...
          </button>
        )}

        {isArr &&
          isArr.map(
            (page, i) =>
              i >= 0 && (
                <button
                  onClick={() => handleCountButton(page)}
                  key={i}
                  className={
                    isCount === page ? `${styles.count} ${styles.active}` : `${styles.count}`
                  }
                >
                  {page}
                </button>
              ),
          )}
        {isArr[isArr.length - 1] !== arrPage[arrPage.length - 2] && (
          <button
            onClick={() => dispatch(setCount(arrPage[arrPage.length - 2]))}
            className={styles.more}
          >
            ...
          </button>
        )}
        <button
          onClick={() =>
            dispatch(
              setCount(
                isCount + 1 > arrPage[arrPage.length - 2] ? isArr[isArr.length - 1] : isCount + 1,
              ),
            )
          }
          className={styles.arrow}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={3}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Paginator;
