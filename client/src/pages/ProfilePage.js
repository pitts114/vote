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
        <li className="list-group-item">{element.title}</li>
      )
    })

    return (
      <ul className="list-group">{items}</ul>
    )
  }

  render(){
    return (
      <div className="container Page">
        <h1 className="text-center text-white">Profile</h1>
        <div className="col-xs-12 col-sm-8 col-sm-offset-2">
          <div className="well text-center">
            <h2>Gitub Profile</h2>
            {githubProfile(this.state.github)}
          </div>
          <div className="panel panel-info">
            <div className="panel-heading">My Polls</div>
            <div className="panel-body">Manage your polls here.</div>
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
      name = <p>{"Display Name: " + obj.displayName}</p>
    }
    return (
      <div>
        <p>{"Username: " + obj.username}</p>
        {name}
        <p>{"Public Repositories: " + obj.repos}</p>
      </div>
    )
  }
  return <div></div>
}





export default ProfilePage
