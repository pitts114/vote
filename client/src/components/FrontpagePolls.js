import React, {Component} from "react"
import axios from "axios"

const displayAmount = 6

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
    axios.get("/api/polls").then((response)=>{
      console.log(response.data)
      var Polls = []
      for (var i = response.data.length-1; i >= 0 && i > response.data.length - displayAmount-1; i--){
        Polls.push(poll(response.data[i]))
      }
      this.setState({
        polls: <div className="row">{Polls}</div>
      })
    })
  }

  render() {
    return(this.state.polls)
  }
}

function poll(obj){
  return(
    <div key={obj._id} className="col-xs-6">
      <div className="well text-center animated fadeInRight">
        <h3>{obj.title}</h3>
      </div>
    </div>
  )
}

export default FrontpagePolls
