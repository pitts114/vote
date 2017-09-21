import React, {Component} from "react"
import axios from "axios"

class NewPollPanel extends Component{
  constructor(props){
    super(props)
    this.state = {
      titleValue: "",
      choicesValue: ""
    }
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onChoicesChange = this.onChoicesChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event){
    event.preventDefault()
    axios.post("/api/new", {
      title: this.state.titleValue,
      choices: this.state.choicesValue
    })
    .then((response)=>{
      if (response.data.error){
        alert("Please make a full poll")
        return
      }
      if (response.data.status === 200){
        console.log(response.data.id)
        this.props.push('/poll/' + response.data.id)
      }
      else {
        alert("Something went wrong!")
      }
    })
  }

  onTitleChange(event){
    const state = this.state
    state.titleValue = event.target.value
    this.setState(state)
  }

  onChoicesChange(event){
    const state = this.state
    state.choicesValue = event.target.value
    this.setState(state)
  }

  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading"><h4>New Poll</h4></div>
        <div className="panel-body">
          <div className="input-group col-xs-12">
            <label className="control-label text-dark" >Poll Title</label>
            <input type="text" className="form-control" placeholder="What would you like to vote on?" value={this.state.titleValue} onChange={this.onTitleChange}/>
          </div>
          <div className="input-group col-xs-12">
            <label className="control-label text-dark opt-label" >Poll Options (Comma Seperated)</label>
            <input type="text" className="form-control" placeholder="Option A, Option B, Option C" value={this.state.choicesValue} onChange={this.onChoicesChange}/>
          </div>
        </div>
        <div className="panel-footer">
          <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default NewPollPanel
