import React, { useState } from 'react';
function Slider(lista) {
  const [iterador, setIterador] = useState(0);
  const { items } = lista;
  const total = items.length - 1;
  const carouselMovel = (ban) => {
    let newIterador = ban
      ? total != iterador
        ? iterador + 1
        : 0
      : iterador > 0
      ? iterador - 1
      : total;
    setIterador(newIterador);
  };
  /*
  const generationPos = (value) => {
    if (value == 0) iterador;

  };
  const gerationImg = (pos) => {};
  */
  return (
    <>
      <div className="slider">
        <button
          className="slider-buttom"
          items="1"
          onClick={() => {
            carouselMovel(true);
          }}>
          &lt;
        </button>
        <div className="container-img ">
          <img className="img" src={items[iterador][1]} alt={items[iterador][0]} />
        </div>
        <button
          className="slider-buttom"
          onClick={() => {
            carouselMovel(false);
          }}>
          &gt;
        </button>
      </div>
    </>
  );
}

export default Slider;
