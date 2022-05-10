import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosApiPixebayImg } from './../../../../reduxer/slices/Data';
import GridImages from '../../../../components/gridComponet/gridImages';

function Render() {
  const { allImgs, load } = useSelector((state) => state.data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosApiPixebayImg());
  }, [dispatch]);

  return (
    <div className="main-home">
      <div>
        <h1 className="title">Images</h1>
        {!load ? <GridImages items={allImgs}></GridImages> : <div className="title">Load...</div>}
      </div>
    </div>
  );
}

export default Render;
