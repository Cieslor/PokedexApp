import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from '../SearchBar';
import PokemonsList from '../PokemonsList';

const Homepage = () => {
  return (
    <Container className='homepage mt-5'>
      <SearchBar />
      <PokemonsList />
    </Container>
  );
};

export default Homepage;
