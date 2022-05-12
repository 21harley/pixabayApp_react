import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosApiPixebayImg } from './../../../../reduxer/slices/Data';
import GridImages from '../../../../components/gridComponet/gridImages';
import MoreImagesButtton from '../MoreImagesButton/MoreImagesButton';
function Render() {
  const { allImgs, load } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allImgs.length == 0) dispatch(axiosApiPixebayImg());
  }, [dispatch]);

  return (
    <div className="main-home">
      <div>
        <h1 className="title">Images</h1>
        {!load ? (
          <>
            <GridImages items={allImgs}></GridImages>
            <MoreImagesButtton />{' '}
          </>
        ) : (
          <div className="title">Load...</div>
        )}
      </div>
    </div>
  );
}

export default Render;
