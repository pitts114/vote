import React, { Component } from 'react';
import PieChart from "./PieChart.js"
import axios from "axios"
import Form from "./Form.js"

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
        element: <div>
          <h1 className="text-center text-white">{response.data.title}</h1>
        <div className="well">
          <PieChart choices={response.data.choices} />
          <Form data={response.data} refresh={this.getPolls}/>
        </div>
      </div>
      })
    })
  }


  render(){
    return(
      <div className="container PollPage">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
            {this.state.element}
        </div>
      </div>
    )
  }
}



export default PollPage
