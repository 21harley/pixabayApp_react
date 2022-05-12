import folder from './../../public/svg/folder.svg';
import magnifier from './../../public/svg/magnifier.svg';
import { Link } from 'react-router-dom';
function GridImages(lista) {
  const { items } = lista;
  return (
    <div className="">
      {items.length > 0 ? (
        <div className="container-img">
          {items.map((el, index) => {
            return (
              <div key={index} className="card__img">
                <Link to={'/fullImg/' + el.id}>
                  <img className="img" key={index} src={el.url} alt={el.name} loading="lazy" />
                  <p className="title title--img">Author:{el.author}</p>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid--center">
          <img className="imgRes" src={folder} alt="folder" />
          <img className="imgRes imgManigier" src={magnifier} alt="magnifier" />
        </div>
      )}
    </div>
  );
}
export default GridImages;
