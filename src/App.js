import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/home.component';
import './App.css';

const HatsPage = () => {
    return(
      <div>
        <h1>HATS PAGE</h1>
      </div>
  );
}

const JacketsPage = () => {
  return(
    <div>
      <h1>JACKETS PAGE</h1>
    </div>
  );
}

const SneakersPage = () => {
  return(
    <div>
      <h1>SNEAKERS PAGE</h1>
    </div>
  );
}

const WomensPage = () => {
  return(
    <div>
      <h1>WOMENS PAGE</h1>
    </div>
  );
}

const MensPage = () => {
  return(
    <div>
      <h1>MENS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
        <Route path='/shop/jackets' component={JacketsPage} />
        <Route path='/shop/sneakers' component={SneakersPage} />
        <Route path='/shop/womens' component={WomensPage} />
        <Route path='/shop/mens' component={MensPage} />                                   
      </Switch>
    </div>
  );
}

export default App;
