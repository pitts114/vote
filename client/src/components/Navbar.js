import React, {Component} from "react"
import "./Navbar.css"

class Navbar extends Component {
  constructor(props){
    super(props)
    this.clickHome = this.clickHome.bind(this)
  }

  clickHome(e){
    e.preventDefault()
    this.props.goHome()
  }

  clickNew(e){
    e.preventDefault()
    this.props.goNew()
  }

  render() {
    var homeClass = ''
    var newClass = ''
    if (this.props.active === "Home")
      homeClass="active"
    else if (this.props.active === "New")
      newClass = "active"

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
              <li className={homeClass}>
                <a href="" onClick={(e)=>{this.clickHome(e)}}>Home</a>
              </li>
              <li className={newClass}>
                <a href="" onClick={(e)=>{this.clickNew(e)}}>New Poll</a>
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
