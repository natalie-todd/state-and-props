import React, { Component } from 'react';
import './App.css';
import Out from './Out/Out';
import In from './In/In';

class App extends Component {
  state = {
    persons: [
      { un: 'soWhat666' },
      { un: 'catMom666' },
      { un: 'eennaaaaneee' }
    ]
  }

  unChangedHandler = (newUN) => {
    this.setState({
      persons: [
        { un: newUN },
        { un: 'catMom666' },
        { un: 'eennaaaaneee' }
      ]
    })
  }

  eventHandlerMR = (event) => {
    this.setState({
      persons: [
        { un: 'soWhat666' },
        { un: event.target.value },
        { un: 'eennaaaaneee' }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Out un={this.state.persons[0].un} />
          <In />
          <Out un={this.state.persons[1].un}
          click={this.unChangedHandler.bind(this, 'RachelSarah!')}>I love Cats!</Out>
          <In 
          changed={this.eventHandlerMR}/>
          <Out un={this.state.persons[2].un} />
          <In />
        </main>
      </div>
    );
  }
}

export default App;
