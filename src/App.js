import React from 'react';
import Abertura from './abertura.mp4';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <video autoPlay playsInline muted>
          <source src={Abertura} type='video/mp4' />
        </video>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/*
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Quem Somos?
        </a>
        */}
      </header>
    </div>
  );
}

export default App;
