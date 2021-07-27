import React from 'react';
import logo from './logo.svg';
import './App.css';

import Todos from "./ToDoItem";




const App  = () =>  {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

            <Todos />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

    </>
  );
}





export default App;



//<ol>{name.map((item) => (<li key={item.toString()}>{item}</li>) )}</ol>

