import React, { Component } from 'react';
import './ionicon.scss';
import Trailerboxmenu from './Trailerboxmenu';
import Trailerboxoverview from './Trailerboxoverview';
import Carousel from './Carousel'; 
import MoreCarousel from './MoreCarousel'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const el = document.getElementById("trailer-overlay");

class Trailerbox extends Component {

  render() {
    return (
      (this.props.transition_state === "Getting the torrent file") ? (<Redirect to="/transition"/>) :
      (this.props.display === 0) ?
      <div className="trailer-box">
        <Trailerboxoverview />
        <Trailerboxmenu display = {this.props.display} type={this.props.movieInfo.Type}/>
      </div> :
      (this.props.display === 1) ?
      <div className="trailer-box">
        <Carousel />
        <Trailerboxmenu display = {this.props.display} type={this.props.movieInfo.Type}/>
      </div> :
      (this.props.display === 2) ?
      <div className="trailer-box">
        <MoreCarousel />
        <Trailerboxmenu display = {this.props.display} type={this.props.movieInfo.Type} />
      </div> :
      <div></div>
    )
  }
 }

const mapStateToProps = state => ({
  movieInfo : state.movies.movieInfo,
  transition_state : state.watch.transition_state,
  display : state.trailerbox.display
})

export default connect(mapStateToProps)(Trailerbox);

