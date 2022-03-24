import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchMovieInfo } from '../actions/movieActions';
import { toggleMenu } from '../actions/trailerboxActions';
import { closeMovieInfo } from '../actions/movieActions';


class RecTile extends Component {

  myOnClick = () => {
    this.props.toggleMenu(0);
    this.props.fetchMovieInfo(this.props.title, this.props.imdbID);

  }

  render() {
    return (
      <div>
        <img className="rec_tile_img" src={this.props.poster} onClick = {this.myOnClick}/>
        <h4>{this.props.title}</h4>
        <p>{this.props.plot}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieInfoimdbID : state.movies.movieInfoimdbID
})
const mapDispatchToProps = {
  closeMovieInfo,
  fetchMovieInfo,
  toggleMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(RecTile);
