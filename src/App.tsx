import React from 'react';
import Homepage from './Components/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './Styles/App.scss';
import { SearchContextProvider } from './Context/search.context';
import Header from './Components/Header';

const App = () => {
  return (
    <Router>
      <SearchContextProvider>
        <div className='app d-flex justify-content-center'>
          <Container className='p-2 p-sm-5'>
            <Header title='Pokedex' />
            <Switch>
              <Route exact path='/'>
                <Redirect to='/pokemons' />
              </Route>
              <Route exact path='/pokemons'>
                <Homepage />
              </Route>
            </Switch>
          </Container>
        </div>
      </SearchContextProvider>
    </Router>
  );
};

export default App;
