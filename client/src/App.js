import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/Navbar.js"
import Frontpage from "./pages/Frontpage.js"
import PollPage from "./pages/PollPage.js"
import NewPollPage from "./pages/NewPollPage.js"
import LoginPage from "./pages/LoginPage.js"
import axios from "axios"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NotFound from "./pages/NotFound.js"
import ProfilePage from "./pages/ProfilePage.js"
import RecentPollsPage from "./pages/RecentPollsPages.js"


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
              <Route path="/profile" component={ProfilePage}/>
              <Route path="/recent" component={RecentPollsPage}/>
              <Route  component={NotFound}/>
            </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
