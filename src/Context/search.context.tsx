import React, { createContext, useContext, useState } from 'react';

interface ISearchContext {
  searchValue: string;
}

interface IProps {
  children: JSX.Element;
}

const SearchContext = createContext<ISearchContext>({} as ISearchContext);
const SearchActionsContext = createContext<any>({});

export const useSearchContext = () => useContext(SearchContext);
export const useSearchActionsContext = () => useContext(SearchActionsContext);

export const SearchContextProvider = ({ children }: IProps) => {
  const [searchValue, setSearchValue] = useState<ISearchContext>({
    searchValue: '',
  });

  return (
    <SearchContext.Provider value={searchValue}>
      <SearchActionsContext.Provider value={setSearchValue}>
        {children}
      </SearchActionsContext.Provider>
    </SearchContext.Provider>
  );
};
