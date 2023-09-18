import React from 'react';
import './SearchForm.css';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';

const SearchForm = () => {
  return (
    <section className="search-container limits-container">
      <div className="search-grid">
        <form className="search__form">
          <input type="text" placeholder="Фильм" className="search__input" />
          <button type="submit" className="search__button">Найти</button>
          <div className='search__vertical'></div>
        </form>
        <FilterCheckbox />
      </div>
      <div className="search__separator"></div>
      <span className='search__message'>Ничего не найдено</span>
    </section>
  );
};

export default SearchForm;



// import React from 'react';
// import './SearchForm.css';
// import FilterCheckbox from '../../Movies/FilterCheckbox/FilterCheckbox';

// const SearchForm = () => {
//   return (
//     <section className="search limits-container">
//       <form className="search__form">
//         <input type="text" placeholder="Фильм" className="search__input" />
//         <button className="search__button">Найти</button>
//         <div className='search__vertical'></div>
//         <FilterCheckbox />
//       </form>
//       <div className="search__separator"></div>
//       <span className='search__message'>Ничего не найдено</span>
//     </section>
//   );
// };

// export default SearchForm