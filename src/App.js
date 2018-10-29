import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Codaisseur</h1>
        </div>
        <main>
        <Title content="Some Simple Title" />
        </main>        
      </div>
    );
  }
}

export default App;