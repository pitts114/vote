import React, {Component} from "react"

class LoginPage extends Component {
  render() {
    return (
      <div className="container Page text-center">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <div className="panel panel-default">
            <div className="panel-heading"><h4>Login</h4></div>
            <div className="panel-body">
            <a href="/auth/github"><button className="btn btn-primary"><img src="/public/img/github_32px.png" alt="GitHub Logo"/> Login with GitHub</button></a>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage
