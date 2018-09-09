import React, { Component } from 'react';
import './App.css';
import Out from './Out/Out';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Out />
          <Out>I love Cats!</Out>
          <Out />
        </main>
      </div>
    );
  }
}

export default App;
