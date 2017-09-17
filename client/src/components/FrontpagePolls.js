import React, {Component} from "react"

class FrontpagePolls extends Component {
  constructor(){
    super()
    this.state = {
      polls: <div></div>
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getPolls = this.getPolls.bind(this)
  }

  componentDidMount(){
    this.getPolls()
  }

  getPolls() {

  }

  render() {
    return(this.state.polls)
  }
}

function poll(obj){
  return(
    <div>

    </div>
  )
}

export default FrontpagePolls
