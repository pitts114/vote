import React, {Component} from "react"
import axios from "axios"

class ProfilePage extends Component {
  constructor(){
    super()
    this.state={
      github:undefined
    }
  }

  componentDidMount(){
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
  }

  render(){
    return (
      <div className="container Page text-center">
        <h1 className="text-white">Profile</h1>
        <div className="well col-xs-12 col-sm-8 col-sm-offset-2">
          <h2>Gitub Profile</h2>
          {githubProfile(this.state.github)}
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
