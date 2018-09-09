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
          <Out un='soWhat666'/>
          <Out un='catMom666'>I love Cats!</Out>
          <Out un='eennaaaaneee'/>
        </main>
      </div>
    );
  }
}

export default App;
