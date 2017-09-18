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
        element: <div className="jumbotron">
          <PieChart choices={response.data.choices} />
          {makeForm(response.data)}
        </div>
      })
    })
  }


  render(){
    return(
      <div className="container PollPage">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <div className="well">
            {this.state.element}
          </div>
        </div>
      </div>
    )
  }
}

function makeForm(data) {
  var radios = []
  data.choices.forEach((element)=>{
    radios.push(
      <div className="radio">
        <label>
        <input type="radio" name={data.title} value={element.choice} />
        {element.choice}
        </label>
      </div>
    )
  })
  return(
    <form>
    	<div className="form-group">
    		<label className="control-label">Vote:</label>
        {radios}
    	</div>
    	<div className="form-group">
    		<button className="btn btn-primary " name="submit" type="submit">Submit</button>
    	</div>
    </form>
  )
}

export default PollPage
