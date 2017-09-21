import React, {Component} from "react"

class NewPollPanel extends Component{
  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading"><h4>New Poll</h4></div>
        <div className="panel-body">
          <div className="input-group col-xs-12">
            <label className="control-label text-dark" >Poll Title</label>
            <input type="text" className="form-control" placeholder="What would you like to vote on?" />
          </div>
          <div className="input-group col-xs-12">
            <label className="control-label text-dark opt-label" >Poll Options (Comma Seperated)</label>
            <input type="text" className="form-control" placeholder="Option A, Option B, Option C" />
          </div>
        </div>
      </div>
    )
  }
}

export default NewPollPanel
