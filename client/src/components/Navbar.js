import React, {Component} from "react"
import "./Navbar.css"

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="https://www.google.com">Vote</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="">Home</a>
              </li>
              <li>
                <a href="/api">API</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://www.google.com">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

/*
class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="https://www.google.com">WebSiteName</a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="https://www.google.com">Home</a>
              </li>
              <li>
                <a href="https://www.google.com">Page 1</a>
              </li>
              <li>
                <a href="https://www.google.com">Page 2</a>
              </li>
              <li>
                <a href="https://www.google.com">Page 3</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="https://www.google.com">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
*/
export default Navbar
