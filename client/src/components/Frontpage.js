import React from "react"
import Jumbotron from "./Jumbotron.js"
import FrontpagePolls from "./FrontpagePolls.js"

function Frontpage(){
  return(
    <div className="container">
      <Jumbotron />
      <FrontpagePolls />
    </div>
  )
}

export default Frontpage
