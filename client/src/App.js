import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <div className="jumbotron">
          <h1>Vote</h1>
          <p>A place to host polls and vote on them.</p>
          <button className="btn btn-primary btn-lg">Login</button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
