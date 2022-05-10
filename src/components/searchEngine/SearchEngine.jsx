import { axiosApiPixebayQuery, setLoad } from './../../reduxer/slices/Data';
import { useDispatch } from 'react-redux';

import search from './../../public/svg/search.svg';
function SearchEngine() {
  const dispatch = useDispatch();
  const handleSudmit = (e) => {
    e.preventDefault();
    const plus = '+';
    const cadena = e.target.search.value;
    if (cadena) {
      let token = cadena.split(' ').filter((el) => {
        return el != '';
      });
      let query = '';
      for (let i = 0; i < token.length; i++) {
        query += i == token.length - 1 ? token[i] : token[i] + plus;
      }
      dispatch(setLoad(true));
      dispatch(axiosApiPixebayQuery(query));
    } else {
      alert('Add query please');
    }
  };
  return (
    <form
      className="search-Form"
      onSubmit={(e) => {
        handleSudmit(e);
      }}>
      <div className="container-center">
        <button className="serch-Form__button">
          <img src={search} alt="search" />
        </button>
        <input type="text" placeholder="search" name="search" className="serch-Form__input" />
      </div>
    </form>
  );
}

export default SearchEngine;
