import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import errorToast from '../../Helpers/errorToast';
import { Pokemon, Stat } from '../../Helpers/pokemon-response-schema';

interface IPokemonDetailsProps {
  location: {
    state: {
      url: string;
      name: string;
    };
  };
}

const fetchPokemon = async (key: string, url: string): Promise<any> => {
  const response = await fetch(url);
  return await response.json();
};

const PokemonDetails = ({
  location: {
    state: { url, name },
  },
}: IPokemonDetailsProps) => {
  const {
    data,
    isLoading,
    error,
  }: { data: Pokemon; isLoading: boolean; error: any } = useQuery(
    [`pokemon-${name}`, url],
    fetchPokemon
  );

  useEffect(() => {
    !!error && errorToast();
  }, [error]);

  return (
    <div className='pokemon-details d-flex justify-content-center mt-4'>
      <Card className='pokemon-details__card position-relative'>
        <Card.Header className='pokemon-details__card-header'>
          <Link
            className='pokemon-details__back-link close float-left'
            to='/'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </Link>
        </Card.Header>
        {isLoading && (
          <div
            className='pokemon-details__card-loader spinner-border text-dark'
            role='status'
          >
            <span className='sr-only'>Loading...</span>
          </div>
        )}
        {!!data && (
          <>
            <Card.Img
              className='pokemon-details__card-image d-block w-75 mx-auto'
              variant='top'
              src={data.sprites.front_default}
            />
            <Card.Body className='pokemon-details__card-body'>
              <Card.Title className='pokemon-details__card-title d-block w-100 text-center text-capitalize'>
                {data.name}
              </Card.Title>
              <ul className='pokemon-details__stats px-3'>
                {data.stats.map((stat: Stat, index: number) => (
                  <li
                    key={index}
                    className='pokemon-details__stats-item w-100 d-flex justify-content-between text-uppercase'
                  >
                    {
                      <span className='stats-item__name'>
                        {stat.stat.name}:
                      </span>
                    }
                    {
                      <span className='stats-item__value'>
                        {stat.base_stat}
                      </span>
                    }
                  </li>
                ))}
              </ul>
            </Card.Body>
          </>
        )}
      </Card>
    </div>
  );
};

export default PokemonDetails;
