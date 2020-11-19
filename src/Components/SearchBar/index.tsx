import React from 'react';
import { useSearchActionsContext } from '../../Context/search.context';

interface ISearchBarProps {
  placeholder?: string;
}

const SearchBar = ({ placeholder }: ISearchBarProps) => {
  const setSearchValue = useSearchActionsContext();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(() => ({
      searchValue: event.target.value,
    }));
  };

  return (
    <div className='search-bar d-flex justify-content-center'>
      <form className='search-bar__form form-inline w-100'>
        <input
          className='search-bar__input form-control w-100'
          type='search'
          onChange={handleSearch}
          placeholder={placeholder ? placeholder : 'Search for pokemons..'}
          aria-label='Search'
        />
      </form>
    </div>
  );
};

export default SearchBar;
