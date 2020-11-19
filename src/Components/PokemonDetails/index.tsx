import React from 'react';

interface IPokemonDetailsProps {
  location: {
    state: {
      url: string;
    };
  };
}

const PokemonDetails = ({
  location: {
    state: { url },
  },
}: IPokemonDetailsProps) => {
  return <div>{url}</div>;
};

export default PokemonDetails;
