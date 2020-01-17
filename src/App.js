import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Persons from './containers/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Persons />
      </div>
    );
  }
}

export default App;
