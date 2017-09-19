import React, {Component} from "react"

class NewPollPage extends Component {
  render(){
    return(
      <div className="col-xs-12 col-sm-8 col-sm-offset-2 NewPollPage">
        <h1 className="text-center text-white">Create A New Poll</h1>
        <div className="well">
          <form>
            <div className="form-group">
              <label className="control-label text-dark">Poll Title</label>
              <input type="text" className="form-control" placeholder="Poll Title" />
              <br/>
              <label className="control-label text-dark">Poll Options (Comma Seperated)</label>
              <input type="text" className="form-control" placeholder="Option 1, Option 2, etc." />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewPollPage
