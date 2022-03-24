import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movie from './Movie';
import PropTypes from 'prop-types';
import no_poster from '../assets/no-poster.png';

class Movieboard extends Component {

  static propTypes = {
      movies: PropTypes.array,
  }
  render() {
    return (
      <div className="movie-board">
        {this.props.movies.map((movie) =>
            <Movie key={movie.imdbID} imdbID={movie.imdbID} title={movie.Title} poster={movie.Poster === "N/A" ? no_poster: movie.Poster}/>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    movies : state.movies.movies
})

export default connect(mapStateToProps)(Movieboard);