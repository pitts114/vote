import React, {Component} from "react"
import Jumbotron from "../components/Jumbotron.js"
import FrontpagePolls from "../components/FrontpagePolls.js"
import RecentPollsPanel from "../components/RecentPollsPanel.js"

class Frontpage extends Component{
  render(){
    return(
      <div className="container">
        <Jumbotron />
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <RecentPollsPanel />
          </div>
        </div>
      </div>
    )
  }
}

export default Frontpage
