import React, {Component} from "react"

class LoginPage extends Component {
  render() {
    return (
      <div className="container Page text-center">
        <h1 className="text-white">Login</h1>
        <form action="/auth/github">
          <input className="btn btn-primary" type="submit" value="Login with GitHub" />
        </form>
      </div>
    )
  }
}

export default LoginPage
