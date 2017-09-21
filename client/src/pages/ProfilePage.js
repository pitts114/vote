import React, {Component} from "react"
import axios from "axios"

class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      github:undefined,
      polls: []
    }
    this.getInfo = this.getInfo.bind(this)
    this.deletePoll = this.deletePoll.bind(this)
    this.panelPolls = this.panelPolls.bind(this)
  }

  componentDidMount(){
    this.getInfo()
  }

  getInfo(){
    axios.get("/api/user").then((response)=>{
      const state = this.state
      state.github={}
      state.github.username = response.data.username
      state.github.repos = response.data.publicRepos
      if (response.data.displayName){
        state.github.displayName = response.data.displayName
      }
      this.setState(state)
    })
    axios.get("/api/user/polls").then((response)=>{
      const state = this.state
      state.polls = response.data.polls
      this.setState(state)
    })
  }

  deletePoll(pollId){
    axios.delete("/api/poll/" + pollId).then((response)=>{
      if (response.data.status === "Poll deleted."){
        this.getInfo()
        alert("Poll deleted!")
      }
    })
  }

  panelPolls(){
    var items = this.state.polls.map((element)=>{
      return (
        <li className="list-group-item">{element.title}<button onClick={()=>{this.deletePoll(element._id)}} className="delete-btn btn btn-sm btn-danger">Delete</button></li>
      )
    })

    return (
      <ul className="list-group">{items}</ul>
    )
  }

  render(){
    return (
      <div className="container Page">
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <div className="panel panel-default">
            <div className="panel-heading"><h3>Gitub Profile</h3></div>
            <div className="panel-body">
            {githubProfile(this.state.github)}
            </div>
          </div>
          <div className="panel panel-info">
            <div className="panel-heading"><h4>My Polls</h4></div>
            {this.panelPolls()}
          </div>
        </div>
      </div>
    )
  }
}

function githubProfile(obj){
  if (obj){
    var name = []
    if (obj.displayName){
      name = <li className="list-group-item">{"Display Name: " + obj.displayName}</li>
    }
    return (
      <ul className="list-group">
        <li className="list-group-item">{"Username: " + obj.username}</li>
        {name}
        <li className="list-group-item">{"Public Repositories: " + obj.repos}</li>
      </ul>
    )
  }
  return <div></div>
}





export default ProfilePage
