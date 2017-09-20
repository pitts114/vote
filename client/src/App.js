import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Frontpage from "./components/Frontpage.js"
import PollPage from "./components/PollPage.js"
import NewPollPage from "./components/NewPollPage.js"
import LoginPage from "./components/LoginPage.js"
import axios from "axios"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NotFound from "./components/NotFound.js"


class App extends Component {
  constructor(){
    super()
    this.state= {
      activePage: "Home",
      user: false
    }
    this.featurePoll = this.featurePoll.bind(this)
    this.goHome=this.goHome.bind(this)
    this.goNewPoll = this.goNewPoll.bind(this)
    this.goLogin = this.goLogin.bind(this)
    this.getUserInfo = this.getUserInfo.bind(this)
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

  goLogin(){
    const state = this.state
    state.activePage="Login"
    this.setState(state)
  }

  getUserInfo(){
    axios.get("/api/user").then((response)=>{
      if (response.data.status === "Logged Out"){
        return
      }
      var name
      if (response.data.displayName){
        name = response.data.displayName
      }
      else {
        name = response.data.username
      }
      const state = this.state
      state.user = name
      this.setState(state)
    })
  }

  componentDidMount(){
    this.getUserInfo()
  }

  render() {
    var page

    switch (this.state.activePage){
      case "Home":
        page = <Frontpage featurePoll={this.featurePoll}/>
        break
      case "New":
        page = <NewPollPage goPoll={this.featurePoll}/>
        break
      case "Login":
        page = <LoginPage />
        break
      default:
        page = <PollPage poll={this.state.activePage} goHome={this.goHome}/>
        break
    }

    return(
      <Router>
        <div className="App">
          <Navbar path="/" goHome={this.goHome} goNew={this.goNewPoll} goLogin={this.goLogin} active={this.state.activePage} user={this.state.user}/>
            <Switch>
              <Route exact={true} path="/" component={Frontpage} />
              <Route path="/poll/:id" component={PollPage}></Route>
              <Route path="/new" component={NewPollPage}/>
              <Route path="/login" component={LoginPage}/>
              <Route  component={NotFound}/>
            </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
