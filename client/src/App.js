import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Frontpage from "./components/Frontpage.js"


class App extends Component {
  constructor(){
    super()
    this.state= {
      activePage: "Home"
    }
  }
  render() {
    if (this.state.activePage === "Home")
    return (
      <div className="App">
        <Navbar />
        <Frontpage />
      </div>
    );
  }
}

export default App;
