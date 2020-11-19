import React from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from '../SearchBar';

const Homepage = () => {
  return (
    <Container className='homepage mt-5'>
      <SearchBar />
    </Container>
  );
};

export default Homepage;
