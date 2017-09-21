import React, {Component} from "react"
import axios from "axios"
import {Link} from "react-router-dom"

class RecentPollsPanel extends Component{
  constructor(){
    super()
    this.state={
      page: 0,
      limit: 6,
      polls: [],
      currentUrl:'/api/polls?page=0&limit=6',
      nextUrl: undefined,
      prevUrl: undefined,
      nextState: 'disabled',
      prevState:"disabled"
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.makePollItems = this.makePollItems.bind(this)
  }

  handleNext(){
    if (this.state.nextUrl)
      this.makePollItems(this.state.nextUrl)
  }

  handlePrev(){
    if (this.state.prevUrl)
      this.makePollItems(this.state.prevUrl)
  }

  makePollItems(url){
    var route = url
    axios.get(route).then((response)=>{
      var items = response.data.polls.map((element)=>{
        return(
          <Link key={element._id} to={"/poll/" + element._id} className="list-group-item">{element.title}</Link>
        )
      })
      const state = this.state
      state.polls = items
      state.nextUrl = response.data.next
      state.prevUrl = response.data.previous
      state.currentUrl = response.data.currentUrl
      if (state.nextUrl)
        state.nextState = ""
      else
        state.nextState="disabled"
      if (state.prevUrl)
        state.prevState = ""
      else
        state.prevState = "disabled"
      this.setState(state)
    })
  }

  componentDidMount(){
    this.makePollItems(this.state.currentUrl)
  }


  render(){
    return(
      <div className="panel panel-default">
        <div className="panel-heading"><h4>Recent Polls</h4></div>
        <div className="panel-body">
          <ul className="list-group">
            {this.state.polls}
          </ul>
        </div>
        <div className="panel-footer">
          <nav>
            <ul className="pager">
              <li onClick={this.handlePrev} className={this.state.prevState + " previous"}><a><span className="glyphicon glyphicon-chevron-left"></span></a></li>
              <li onClick={this.handleNext} className={this.state.nextState + " next"}><a><span className="glyphicon glyphicon-chevron-right"></span></a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }

}

export default RecentPollsPanel
