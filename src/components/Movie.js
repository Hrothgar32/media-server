import React, { Component } from 'react';
import { fetchMovieInfo } from '../actions/movieActions';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { closeMovieInfo } from '../actions/movieActions';
import Trailerbox from './Trailerbox';
import './ionicon.scss';

const el = document.getElementById("trailer-overlay");

class Movie extends Component {

  constructor(props){
      super(props);
      this.state = {
          trailerbox : null,
          title: this.props.title,
          poster: this.props.poster,
          ownimdbID: this.props.imdbID,
      }

    }
  componentWillReceiveProps(nextProps){
    if(this.state.ownimdbID === nextProps.movieInfoimdbID && nextProps.movieInfo !== null){
      let newBox =  <Trailerbox closeMovieInfo={closeMovieInfo} />;
      this.setState({
        trailerbox : newBox,
      })
    }
    else if(nextProps.movieInfo === null){
      this.setState({
        trailerbox: null,
      })
    }
  }

  onClick = () => {
    this.props.fetchMovieInfo(this.state.title, this.state.ownimdbID);
  }

  render() {
    return (
      <div id={this.state.imdbID} className="movie-container">
        <img src={ this.state.poster } alt="..." className="movie-poster" />
        <i onClick={this.onClick} className="ion-ios-more"></i>
        {
          ReactDOM.createPortal(
          this.state.trailerbox, el 
        )}
      </div>
    )
  }
}

const mapStateToProps = menet => ({
  movieInfo: menet.movies.movieInfo,
  movieInfoimdbID : menet.movies.movieInfoimdbID
})

export default connect(mapStateToProps, {fetchMovieInfo})(Movie);
