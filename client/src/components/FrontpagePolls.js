import React, {Component} from "react"
import axios from "axios"
import "./FrontpagePolls.css"
import {VictoryPie} from "victory-pie"

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
      var id = 1
      for (var i = response.data.length-1; i >= 0 && i > response.data.length - displayAmount-1; i--){
        Polls.push(poll(response.data[i], id++))
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

function poll(obj, id){
  return(
    <div id={"poll" + id.toString()} key={obj._id} className="col-xs-12 col-sm-6 animated fadeInRight">
     <h3>{obj.title}</h3>
      <div className="well">
        {pieChart(obj.choices)}
      </div>
    </div>
  )
}

function pieChart(choices) {
  var data = choices.filter((element)=>{
    return element.votes > 0
  }).map((element)=>{
    return {x: element.choice + ": " + element.votes.toString(), y: element.votes, label: element.choice + ": " + element.votes.toString()}
  })
  if (data.length === 0){
    data = [{x:"None", y:1}]
  }
  else {

  }

  return(
    <VictoryPie className="pie" data={data} colorScale="qualitative" padAngle={3} innerRadius={70} responsive={true} width={550}/>
  )
}

export default FrontpagePolls
