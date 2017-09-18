import React, {Component} from "react"
import axios from "axios"
import "./FrontpagePolls.css"
import PieChart from "./PieChart.js"

const displayAmount = 6 //How many polls should be displayed on the frontpage

class FrontpagePolls extends Component {
  constructor(props){
    super(props)
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
      var id = 1
      for (var i = response.data.length-1; i >= 0 && i > response.data.length - displayAmount-1; i--){
        Polls.push(poll(response.data[i], id++, this.props.featurePoll))
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

function poll(obj, id, featureFunc){
  return(
    <a key={obj._id} onClick={()=>{featureFunc(obj._id)}}>
      <div id={"poll" + id.toString()} className="col-xs-12 col-sm-6 animated fadeInRight">
        <h3>{obj.title}</h3>
        <div className="well">
          <PieChart choices={obj.choices} />
        </div>
      </div>
    </a>
  )
}


export default FrontpagePolls
