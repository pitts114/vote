import React, {Component} from "react"
import axios from "axios"

class NewPollPage extends Component {
  constructor(props) {
    super(props)
    this.state={
      titleValue:'',
      choicesValue: ''
    }
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onChoicesChange = this.onChoicesChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
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
        this.props.history.push('/poll/' + response.data.id)
      }
      else {
        alert("Something went wrong!")
      }
    })
  }

  render(){
    return(
      <div className="col-xs-12 col-sm-8 col-sm-offset-2 Page">
        <div className="panel panel-default">
          <div className="panel-heading"><h4>Create A New Poll</h4></div>
          <div className="panel-body">
          <form>
            <div className="form-group">
              <label className="control-label text-dark">Poll Title</label>
              <input type="text" className="form-control" placeholder="Poll Title" value={this.state.titleValue} onChange={this.onTitleChange}/>
              <br/>
              <label className="control-label text-dark">Poll Options (Comma Seperated)</label>
              <input type="textarea" className="form-control" placeholder="Option 1, Option 2, etc." value={this.state.choicesValue} onChange={this.onChoicesChange}/>
            </div>
            <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
          </form>
        </div>
        </div>
      </div>
    )
  }
}

export default NewPollPage
