import React from 'react';

interface IHeaderProps {
  title: string;
}

const Header = ({ title }: IHeaderProps) => {
  return (
    <div className='header d-flex justify-content-center'>
      <h1 className='header__title font-weight-bold display-2'>{title}</h1>
    </div>
  );
};

export default Header;
