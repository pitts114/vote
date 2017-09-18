import React, { Component } from 'react';
import PieChart from "./PieChart.js"
import axios from "axios"

class PollPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      element: <div></div>
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getPolls = this.getPolls.bind(this)
  }

componentDidMount() {
  this.getPolls()
}

  getPolls() {
    var pollId = this.props.poll.replace("poll:", "")
    axios.get("/api/poll/" + pollId).then((response)=>{
      this.setState({
        element: <PieChart choices={response.data.choices} />
      })
    })
  }


  render(){
    return(this.state.element)
  }
}

export default PollPage
