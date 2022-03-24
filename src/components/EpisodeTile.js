import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getTorrentFile } from '../actions/watchActions';

class EpisodeTile extends Component {

  render() {
    return (
      <div>
        <p className="ep_number">{this.props.number}</p>
        <img className="tile__img" src={this.props.poster} onClick = {() => this.props.getTorrentFile(this.props.movieInfo.imdbID, this.props.movieInfo.Type, this.props.movieInfo.Title, "Full Season " + this.props.season, this.props.number) } />
        <h4>{this.props.title}</h4>
        <p>{this.props.plot}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  movieInfo : state.movies.movieInfo,
})

const mapDispatchToProps = {
  getTorrentFile
}

export default connect(mapStateToProps,mapDispatchToProps)(EpisodeTile);
