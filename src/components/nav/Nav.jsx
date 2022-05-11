/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import SearchEngine from '../../components/searchEngine/SearchEngine';
import menuSVG from './../../public/svg/menu.svg';
import rocket from './../../public/svg/rocket.svg';
import { Link } from 'react-router-dom';
function Nav({ search }) {
  //console.log(search);
  const [menu, setMenu] = useState(true);
  const handleMenu = (e) => {
    e.preventDefault();
    setMenu(!menu);
  };
  return (
    <nav className="nav-home">
      <div className="top__padding flex flex--between">
        <Link to={'/'}>
          <div className=" logo left__padding">
            <img src={rocket} alt="logo" />
          </div>
        </Link>
        <button
          className="nav-home__button right__padding"
          onClick={(e) => {
            handleMenu(e);
          }}>
          <img src={menuSVG} alt="menu" />
        </button>
      </div>
      {search ? (
        <div>
          <SearchEngine></SearchEngine>
        </div>
      ) : (
        <></>
      )}
      {menu ? (
        <ul className="nav-home__ul">
          <li className="nav-home__li">Search engine</li>
          <li className="nav-home__li">Hello!</li>
          <li className="nav-home__li">Login</li>
        </ul>
      ) : (
        <></>
      )}
    </nav>
  );
}
export default Nav;
