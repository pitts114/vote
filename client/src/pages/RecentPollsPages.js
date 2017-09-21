import React, {Component} from "react"
import RecentPollsPanel from "../components/RecentPollsPanel.js"

class RecentPollsPages extends Component {
  render(){
    return(
      <div className="container Page">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <RecentPollsPanel />
        </div>
      </div>
    )
  }
}

export default RecentPollsPages
