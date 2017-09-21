import React, { Component } from 'react';
import PieChart from "../components/PieChart.js"
import axios from "axios"
import Form from "../components/Form.js"
import {Link} from "react-router-dom"

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
    console.log(this.props)
    var pollId = this.props.match.params.id
    axios.get("/api/poll/" + pollId).then((response)=>{
      this.setState({
        data: response.data
      })
    })
  }


  render(){
    if (!this.state.data.title)
    return(
      <div className="container Page">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
        </div>
      </div>
    )
    return(
      <div className="container Page">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <div className="panel panel-default">
          <div className="panel-heading"><h4>{this.state.data.title}</h4></div>
          <div className="panel-body">
            <PieChart choices={this.state.data.choices} />
          </div>
            <div className="panel-footer">
            <Form data={this.state.data} refresh={this.refresh}/>
            <Link to="/"><button className="btn btn-primary"><span className="glyphicon glyphicon-menu-left"></span></button></Link>
          </div>
        </div>
      </div>
      </div>
    )
  }
}



export default PollPage
