import React, {Component} from "react"

class LoginPage extends Component {
  render() {
    return (
      <div className="container Page">
        <h1>Login</h1>
        <form action="/auth/github">
          <input type="submit" value="Login with GitHub" />
        </form>
      </div>
    )
  }
}

export default LoginPage
