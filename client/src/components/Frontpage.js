import React, {Component} from "react"
import Jumbotron from "./Jumbotron.js"
import FrontpagePolls from "./FrontpagePolls.js"

class Frontpage extends Component{
  render(){
    console.log(this.props)
    return(
      <div className="container">
        <Jumbotron />
        <FrontpagePolls/>
      </div>
    )
  }
}

export default Frontpage
