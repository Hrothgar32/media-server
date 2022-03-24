import React, { Component } from 'react';
import { toggleMenu } from '../actions/trailerboxActions';
import { connect } from 'react-redux';

class Trailerboxmenu extends Component {
  onYourClick = (display) => {
    this.props.toggleMenu(display);
  }
  render() {
    return (
      <React.Fragment>
          <ul className="menu">
            <li onClick = {() => this.onYourClick(0)} className={(this.props.display === 0) ? "current" : ""}><a>OVERVIEW</a>
            <span></span></li>
            {(this.props.type === "series" || this.props.type === "seriesT") ?
              <li onClick = {() =>this.onYourClick(1)} className={(this.props.display === 1) ? "current" : ""}><a>EPISODES</a>
              <span></span></li> : ""
            } 
            <li onClick = {() => this.onYourClick(2)} className={(this.props.display === 2) ? "current" : ""}><a>MORE LIKE THIS</a>
            <span></span></li>
        </ul>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  toggleMenu
}

const mapStateToProps = state => ({
  type : state.movies.movieInfo.Type
})

export default connect(mapStateToProps,mapDispatchToProps)(Trailerboxmenu);
