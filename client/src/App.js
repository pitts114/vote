import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Frontpage from "./components/Frontpage.js"
import PollPage from "./components/PollPage.js"


class App extends Component {
  constructor(){
    super()
    this.state= {
      activePage: "Home"
    }
    this.featurePoll = this.featurePoll.bind(this)
  }

  featurePoll(pollId) {
    const state = this.state
    state.activePage = "poll:" + pollId
    this.setState(state)
  }

  render() {
    if (this.state.activePage === "Home")
    return (
      <div className="App">
        <Navbar />
        <Frontpage featurePoll={this.featurePoll}/>
      </div>
    );
    else {
      return(
        <div className="App">
          <Navbar />
          <PollPage poll={this.state.activePage} />
        </div>
      )
    }
  }
}

export default App;
