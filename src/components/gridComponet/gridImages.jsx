function GridImages(lista) {
  const { items } = lista;
  return (
    <div className="container-img">
      {items.map((el, index) => {
        return <img className="img" key={index} src={el[1]} alt={el[0]} />;
      })}
    </div>
  );
}
export default GridImages;
