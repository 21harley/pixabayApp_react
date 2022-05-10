import folder from './../../public/svg/folder.svg';
import magnifier from './../../public/svg/magnifier.svg';
function GridImages(lista) {
  const { items } = lista;

  return (
    <div className="">
      {items.length > 0 ? (
        <div className="container-img">
          {items.map((el, index) => {
            return <img className="img" key={index} src={el.url} alt={el.name} />;
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
