import React, {Component} from "react"
import Jumbotron from "../components/Jumbotron.js"
import FrontpagePolls from "../components/FrontpagePolls.js"

class Frontpage extends Component{
  render(){
    return(
      <div className="container">
        <Jumbotron />
        <FrontpagePolls/>
      </div>
    )
  }
}

export default Frontpage
