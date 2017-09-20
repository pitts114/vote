import React, {Component} from "react"
import "./Navbar.css"
import {Link} from "react-router-dom"

class Navbar extends Component {
  constructor(props){
    super(props)
    this.setActivePage = this.setActivePage.bind(this)
  }

  setActivePage(){
    var obj = {home: "", new: "", login: ""}
    switch (this.props.path){
      case "/":
        obj.home = "active"
        break
      case "/new":
        obj.new = "active"
        break
      case "/login":
        obj.login = "active"
        break
      default:
        break
    }
    return obj
  }

  render() {
    var activePage = this.setActivePage()
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Vote</a>
          </div>
          <div className="collapse navbar-collapse text-center" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className={activePage.home}>
                <Link to={"/"}>Home</Link>
              </li>
              <li className={activePage.new}>
                <Link to="/new">New Poll</Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {welcomeMsg(this.props.user)}
              <li className={activePage.login}>
                {loginLogout(this.props.user)}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function loginLogout(user){
  if (user){
    return(
      <a href="/logout">Logout</a>
    )
  }
  else {
    return <Link to="/login">Login</Link>
  }
}

function welcomeMsg(user){
  if (user){
    return (
      <li>
        <a>{"Welcome, " + user}</a>
      </li>
    )
  }
  return
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
