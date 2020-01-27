import React from 'react';
import logo from './logo.svg';
// import code from './code.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="code" />
        <p>
          Welcome to <code>React</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          // href="https://www.ey.com/en_gl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
