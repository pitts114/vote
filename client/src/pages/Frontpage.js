import React, {Component} from "react"
import Jumbotron from "../components/Jumbotron.js"
import FrontpagePolls from "../components/FrontpagePolls.js"

class Frontpage extends Component{
  render(){
    return(
      <div className="container">
        <Jumbotron />
        <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
  </ol>


  <div className="carousel-inner">
    <div className="item active">
      <img src="http://placehold.it/1200x315" alt="..." />
      <div className="carousel-caption">
      	<h3>Caption Text</h3>
      </div>
    </div>
    <div className="item">
      <img src="http://placehold.it/1200x315" alt="..." />
      <div className="carousel-caption">
      	<h3>Caption Text</h3>
      </div>
    </div>
    <div className="item">
      <img src="http://placehold.it/1200x315" alt="..." />
      <div className="carousel-caption">
      	<h3>Caption Text</h3>
      </div>
    </div>
  </div>


  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left"></span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right"></span>
  </a>
</div>
      </div>
    )
  }
}

export default Frontpage
