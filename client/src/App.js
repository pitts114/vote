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
    return(
      <Router>
        <div className="App">
          <Route render={(props) => ( <Navbar path={props.location.pathname} user={this.state.user}/> )} />
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
