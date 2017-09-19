import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Frontpage from "./components/Frontpage.js"
import PollPage from "./components/PollPage.js"
import NewPollPage from "./components/NewPollPage.js"


class App extends Component {
  constructor(){
    super()
    this.state= {
      activePage: "Home"
    }
    this.featurePoll = this.featurePoll.bind(this)
    this.goHome=this.goHome.bind(this)
    this.goNewPoll = this.goNewPoll.bind(this)
  }

  featurePoll(pollId) {
    const state = this.state
    state.activePage = "poll:" + pollId
    this.setState(state)
  }

  goHome(){
    const state = this.state
    state.activePage="Home"
    this.setState(state)
  }

  goNewPoll(){
    const state = this.state
    state.activePage="New"
    this.setState(state)
  }

  render() {
    var page

    switch (this.state.activePage){
      case "Home":
        page = <Frontpage featurePoll={this.featurePoll}/>
        break
      case "New":
        page = <NewPollPage />
        break
      default:
        page = <PollPage poll={this.state.activePage} goHome={this.goHome}/>
        break
    }

    return(
      <div className="App">
        <Navbar goHome={this.goHome} goNew={this.goNewPoll} active={this.state.activePage}/>
        {page}
      </div>
    )
  }
}


export default App;
