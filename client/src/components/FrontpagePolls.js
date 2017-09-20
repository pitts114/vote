import React, {Component} from "react"
import axios from "axios"
import "./FrontpagePolls.css"
import PieChart from "./PieChart.js"

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
    axios.get("/api/polls?page=0&limit=6").then((response)=>{
      var Polls = []
      var id = 1
      for (var i = response.data.length-1; i >= 0; i--){
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
      <div key={obj._id} id={"poll" + id.toString()} className="col-xs-12 col-sm-6 animated fadeInRight text-center">
        <h3>{obj.title}</h3>
        <div className="well">
          <PieChart choices={obj.choices} />
          <button onClick={()=>{featureFunc(obj._id)}} className="btn btn-primary">Vote!</button>
        </div>
      </div>
  )
}


export default FrontpagePolls
