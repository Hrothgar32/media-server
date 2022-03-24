import React, { Component } from 'react';
import { closeMovieInfo } from '../actions/movieActions';
import { getTorrentFile } from '../actions/watchActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Trailerboxoverview extends Component {

    static propTypes = {
        closeMovieInfo: PropTypes.func.isRequired,
        getTorrentFile: PropTypes.func.isRequired,
      }

    onCloseClick = () => {
        this.props.closeMovieInfo();
      }

  render() {
    return (
      <React.Fragment>
          <div className="movie-info">
          <h1>{ this.props.movieInfo.Title }</h1>
          <p>{ this.props.movieInfo.Plot }</p>
          <div id="actors">
              <h2>Stars:</h2>
              <p style={{
                paddingTop: "1vh", 
                paddingLeft: "2vh",
                fontFamily: "Gotham Light Italic", }}>{this.props.movieInfo.Actors}</p>
          </div>
            <button onClick={this.onCloseClick}>Close</button>
        </div>
        <div className="trailer-holder">
          <iframe title="trailer" width="640px" height="480px" src={this.props.movieInfo.ytURL + "?rel=0&controls=0&autoplay=1&loop=1&modestbranding=1"} frameborder="0" allow="autoplay" />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
    movieInfo : state.movies.movieInfo,
})

const mapDispatchToProps = {
    closeMovieInfo,
    getTorrentFile
}

export default connect(mapStateToProps,mapDispatchToProps)(Trailerboxoverview);
