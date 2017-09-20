import React, { Component } from 'react';
import axios from "axios"

class Form extends Component {
  constructor(props){
    super(props)
    this.state={
      selected: ""
    }
    this.handleClick = this.handleClick.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleClick(choice){
    const state = this.state
    state.selected = choice
    this.setState(state)
  }

  submit(){
    if (this.state.selected !== ""){
      axios.post("/api/poll/" + this.props.data._id, {choice: this.state.selected})
        .then((response)=>{
          console.log(response)
          if (response.data.status === "You already voted!"){
            alert("You already voted!")
            return
          }

          this.props.refresh(response.data)
          alert("You voted for " + this.state.selected)
        })
    }
    else{
      alert("Make a choice first dummy!")
    }
  }

  render(){
    var radios = []
    this.props.data.choices.forEach((element)=>{
      radios.push(
        <div className="radio">
          <label>
          <input type="radio" name={this.props.data.title} value={element.choice} onClick={()=>{this.handleClick(element.choice)}}/>
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
      		<button className="btn btn-primary " name="submit" type="submit" onClick={(e)=>{e.preventDefault();this.submit()}}>Submit</button>
      	</div>
      </form>
    )
  }
}

export default Form
