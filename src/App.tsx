import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.min.css';
import './Styles/App.scss';
import { SearchContextProvider } from './Context/search.context';
import Homepage from './Components/Homepage';
import Header from './Components/Header';
import PokemonDetails from './Components/PokemonDetails';

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
              <Route path='/pokemons/:name' component={PokemonDetails} />
            </Switch>
          </Container>
          <ToastContainer autoClose={3000} />
        </div>
      </SearchContextProvider>
    </Router>
  );
};

export default App;
