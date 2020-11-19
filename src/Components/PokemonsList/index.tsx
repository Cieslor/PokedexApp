import React, { useEffect, useState, useMemo } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { POKEMON_API_URL, FETCH_ERROR_TEXT } from '../../Helpers/constants';
import { useSearchContext } from '../../Context/search.context';

interface IPokemonFetchItem {
  name: string;
  url: string;
}

const fetchPokemons = async (): Promise<any> => {
  const response = await fetch(`${POKEMON_API_URL}/pokemon/?limit=1050`);
  return await response.json();
};

const errorToast = () =>
  toast.error(FETCH_ERROR_TEXT, {
    position: toast.POSITION.TOP_RIGHT,
  });

const PokemonsList = () => {
  const { data, error, isLoading } = useQuery('pokemons', fetchPokemons);
  const { searchValue } = useSearchContext();
  const [filteredData, setFilteredData] = useState([] as any);

  useEffect(() => {
    error && errorToast();
  }, [error]);

  useMemo(() => {
    !!data &&
      setFilteredData(
        data.results.filter((item: IPokemonFetchItem) =>
          item.name.includes(searchValue)
        )
      );
  }, [data, searchValue]);

  return (
    <div className='pokemons-list d-flex justify-content-center mt-4'>
      {isLoading && (
        <div className='spinner-border text-light' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      )}
      {filteredData.length > 0 ? (
        <ul className='pokemons-list__content d-flex flex-wrap'>
          {filteredData.map((item: IPokemonFetchItem) => (
            <li
              key={`pokemons-list__item-${item.name}`}
              className='pokemons-list__item d-block w-10 p-2 text-center text-capitalize'
            >
              <Link
                key={`pokemons-list__item-${item.name}-link`}
                className='pokemons-list__item-link'
                to={{
                  pathname: `pokemons/${item.name}`,
                  state: { url: item.url },
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        !isLoading && <p className='pokemons-list__no-records'>No records</p>
      )}
    </div>
  );
};

export default PokemonsList;
