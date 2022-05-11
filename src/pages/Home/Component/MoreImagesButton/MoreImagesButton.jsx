import leftArrow from './../../../../public/svg/leftArrow.svg';
import rightArrow from './../../../../public/svg/rightArrow.svg';
import { useDispatch, useSelector } from 'react-redux';
import { axiosApiPixebayQuery, setPage, setLoad } from './../../../../reduxer/slices/Data';

function MoreImagesButtton() {
  const { totalPages, query, pages } = useSelector((state) => state.data);
  console.log(totalPages, query, pages);
  const dispatch = useDispatch();
  const movilImg = (item) => {
    const newPage = pages + (item ? +1 : -1);
    //console.log(newPage);
    dispatch(setLoad(true));
    dispatch(setPage({ pages: newPage }));
    dispatch(axiosApiPixebayQuery({ q: query, pages: newPage }));
  };
  return (
    <>
      <div className="container__buttons">
        {pages > 1 ? (
          <button
            onClick={() => {
              movilImg(false);
            }}
            className="button__arrow">
            <p className="buttons__number">{pages - 1}</p>
            <img src={leftArrow} alt="leftArrow"></img>
          </button>
        ) : (
          <></>
        )}
        {totalPages > 0 && totalPages != pages ? (
          <button
            onClick={() => {
              movilImg(true);
            }}
            className="button__arrow">
            <img src={rightArrow} alt="rightArrow"></img>
            <p className="buttons__number">{pages + 1}</p>
          </button>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default MoreImagesButtton;
