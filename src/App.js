import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import Formulario from './Formulario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to='/foda'>Usuario</Link>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Switch>
          <Route path='/foda' component= {Formulario}/>
        </Switch>

      </header>
    </div>
  );
}

export default App;
