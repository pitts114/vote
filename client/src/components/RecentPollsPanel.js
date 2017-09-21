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
      next: '',
      prev: ''
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
    this.makePollItems = this.makePollItems.bind(this)
  }

  handleNext(){

  }

  handlePrev(){

  }

  makePollItems(){
    var route = "/api/polls?page=" + this.state.page.toString() + "&limit=" + this.state.limit.toString()
    axios.get(route).then((response)=>{
      var items = response.data.polls.map((element)=>{
        return(
          <Link to={"/poll/" + element._id} className="list-group-item">{element.title}</Link>
        )
      })
      const state = this.state
      state.polls = items
      state.next = response.data.next
      state.prev = response.data.prev
      console.log(state.next)
      console.log(state.prev)
      this.setState(state)
    })
  }

  componentDidMount(){
    this.makePollItems()
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
              <li><a>Previous</a></li>
              <li><a>Next</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }

}

export default RecentPollsPanel
