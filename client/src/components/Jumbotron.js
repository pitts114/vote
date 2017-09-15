import React, {Component} from "react"

class Jumbotron extends Component {
  render() {
    return(
      <div className="container animated fadeInUp">
        <div className="jumbotron">
          <h1><b>Vote</b></h1>
          <p>A place to host polls and vote on them.</p>
          <button className="btn btn-primary btn-lg">Login</button>
        </div>
      </div>
    )
  }
}

export default Jumbotron
