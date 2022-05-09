import search from './../../public/svg/search.svg';
function SearchEngine() {
  const handleSudmit = (e) => {
    e.preventDefault();
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
        <input type="text" placeholder="search" className="serch-Form__input" />
      </div>
    </form>
  );
}

export default SearchEngine;
