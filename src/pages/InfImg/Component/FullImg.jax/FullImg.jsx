import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { axiosApiPixebayQueryId } from './../../../../reduxer/slices/Data';
import { Link } from 'react-router-dom';
function FullImg() {
  let { id } = useParams();
  const { oneImg, allImgs } = useSelector((state) => state.data);
  const img = useRef();
  const dispatch = useDispatch();

  let listaImg = [];
  for (let i = 0; i < allImgs.length; i++) {
    if (id == allImgs[i].id) {
      listaImg = i + 5 < allImgs.length ? allImgs.slice(i, i + 5) : allImgs.slice(0, 5);
      break;
    }
  }
  useEffect(() => {
    dispatch(axiosApiPixebayQueryId(id));
  }, [dispatch, id]);

  return (
    <>
      <div>
        {oneImg ? (
          <div>
            <figure className="container__fullImg">
              <img
                ref={img}
                className="imgFull"
                src={oneImg.fullHDURL}
                alt={oneImg.tags}
                loading="lazy"
              />
              <figcaption className="title title--imgFull">Author:{oneImg.user}</figcaption>
              <p>
                tags:{oneImg.tags} views: {oneImg.views} downloads: {oneImg.downloads}
              </p>
            </figure>
          </div>
        ) : (
          <></>
        )}
        <div className="container__imgLinks">
          {listaImg.map((el, index) => {
            return (
              <div key={index} className="container__imgLink card__img">
                <Link to={'/fullImg/' + el.id}>
                  <img className="img" src={el.url} alt={el.name} />
                  <p className="title title--img">Author:{el.author}</p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default FullImg;
/*
collections: 1686
comments: 78
downloads: 48178
fullHDURL: "https://pixabay.com/get/g0f19b6ef0e56cd83ab831107cdc526f4e7ffae01e29295fbbc37b178198818cc9c734916e7743740281be5ead4fdc9a020713b10dcb9d3ac4edd6829b6a31099_1920.jpg"
id: 1316127
id_hash: "1316127"
imageHeight: 3574
imageSize: 2268875
imageURL: "https://pixabay.com/get/g5da944c6ba591b99a1ed560a86c0c513d4fc2043130e8eed17ed93aee82e844f0222150a13eab5136b2f19d1c1c3b837.jpg"
imageWidth: 5361
largeImageURL: "https://pixabay.com/get/g20847a27082fdf2dae70dc4d4fea82c0d0aab2355670761f3e0d696af69274fde42fa2e95c2fc779370e774df7d13882ae13fe0d770f30f6c455dca215e9b52e_1280.jpg"
likes: 367
pageURL: "https://pixabay.com/photos/daffodils-tea-tea-time-cup-of-tea-1316127/"
previewHeight: 99
previewURL: "https://cdn.pixabay.com/photo/2016/04/08/13/52/daffodils-1316127_150.jpg"
previewWidth: 150
tags: "daffodils, tea, tea time"
type: "photo"
user: "JillWellington"
userImageURL: "https://cdn.pixabay.com/user/2018/06/27/01-23-02-27_250x250.jpg"
user_id: 334088
views: 92373
webformatHeight: 426
webformatURL: "https://pixabay.com/get/g30f8c023c47224a039b2620b585d01b2daf1f14b01a22e794f8fce7a3034ba8b1c2e0f5155ff8936e124f41bd9ba5a59_640.jpg"
webformatWidth: 640
*/
