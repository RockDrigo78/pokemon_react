import React from 'react';
import logo from './logo.svg'
import './App.css';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';



function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo"/>
      <div>
        <Pokedex />
        <Pokegame />

      </div>
    </div>
  );
}

export default App;
