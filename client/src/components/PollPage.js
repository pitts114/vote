import React, { Component } from 'react';
import PieChart from "./PieChart.js"
import axios from "axios"
import Form from "./Form.js"

class PollPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.getPolls = this.getPolls.bind(this)
    this.refresh = this.refresh.bind(this)
  }

componentDidMount() {
  this.getPolls()
}

  refresh(data){
    this.setState({
      data:data
    })
  }

  getPolls() {
    var pollId = this.props.poll.replace("poll:", "")
    axios.get("/api/poll/" + pollId).then((response)=>{
      this.setState({
        data: response.data
      })
    })
  }


  render(){
    if (!this.state.data.title)
    return(
      <div className="container PollPage">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        </div>
      </div>
    )
    return(
      <div className="container PollPage">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <h1 className="text-center text-white">{this.state.data.title}</h1>
          <div className="well">
            <PieChart choices={this.state.data.choices} />
            <Form data={this.state.data} refresh={this.refresh}/>
            <button onClick={this.props.goHome} className="btn btn-primary"><span className="glyphicon glyphicon-menu-left"></span></button>
          </div>
        </div>
      </div>
    )
  }
}



export default PollPage
