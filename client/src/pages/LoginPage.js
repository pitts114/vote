import React, {Component} from "react"

class LoginPage extends Component {
  render() {
    return (
      <div className="container Page text-center">
        <h1 className="text-white">Login</h1>
        <a href="/auth/github"><button className="btn btn-primary"><img src="/public/img/github_32px.png" alt="GitHub Logo"/> Login with GitHub</button></a>
      </div>
    )
  }
}

export default LoginPage
