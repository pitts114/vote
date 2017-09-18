import React, {Component} from "react"
import {VictoryPie} from "victory-pie"


class PieChart extends Component{
  render(){
  var data = this.props.choices.filter((element)=>{
    return element.votes > 0
  }).map((element)=>{
    return {x: element.choice + ": " + element.votes.toString(), y: element.votes, label: element.choice + ": " + element.votes.toString()}
  })
  if (data.length === 0){
    data = [{x:"None", y:1}]
  }

  return(
    <VictoryPie className="pie" data={data} colorScale="qualitative" padAngle={3} innerRadius={70} responsive={true} width={550}/>
  )
}
}

export default PieChart
