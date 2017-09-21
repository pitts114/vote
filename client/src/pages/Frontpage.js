import React, {Component} from "react"
import Jumbotron from "../components/Jumbotron.js"
import FrontpagePolls from "../components/FrontpagePolls.js"
import RecentPollsPanel from "../components/RecentPollsPanel.js"
import NewPollPanel from "../components/NewPollPanel.js"

class Frontpage extends Component{
  render(){
    console.log(this.props)
    return(
      <div className="container">
        <Jumbotron />
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <RecentPollsPanel />
          </div>
          <div className="col-xs-12 col-sm-6">
            <NewPollPanel push={this.props.history.push}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Frontpage
