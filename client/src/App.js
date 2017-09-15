import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Jumbotron from "./components/Jumbotron.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
