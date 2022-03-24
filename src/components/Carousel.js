import React, { Component } from 'react';
import Slider from 'react-slick';
import './ionicon.scss';
import EpisodeTile from './EpisodeTile';
import { connect } from 'react-redux';
import { getEpisodes } from '../actions/movieActions';

class Carousel extends Component {

  constructor(props){
    super(props);
    this.state = {
      episodes : this.props.episodes,
      season : 1,
    }
  }

  componentDidMount(){
    this.props.getEpisodes(this.props.movieInfo.imdbID, 1);
  }

  onClick = (season) => {
    this.props.getEpisodes(this.props.movieInfo.imdbID, season);
  }

  render() {
    const settings = {
      dots:true,
      infinite: true,
      speed: 500,
      slidesToShow:4,
      slidesToScroll: 4,
    }
    var array = [];
    for(let i = 1; i <= this.props.movieInfo.totalSeasons; i++)
      array.push(i);
    return (
        (this.props.movieInfo.Type === "seriesT") ?
        <div className="carousel">
          <h1>{this.props.movieInfo.Title}</h1>
          <div className="label-container">
            <div className="label"> Season {this.state.season} <i className="ion-md-arrow-dropdown"></i></div>
            <div className="sub-menu">
              <ul className="sub-menu-list">
                  {array.map((season) => <li className="sub-menu-item" onClick = {() => {this.setState({...this.state, season : season});this.props.getEpisodes(this.props.movieInfo.imdbID, season)}}><a>Season {season}</a></li>)}
              </ul>
          </div>
          </div>
          <Slider {...settings}>
            {this.props.movieInfo.episodeList.map((episode) => <EpisodeTile season = { this.state.season } number = { episode.Episode } plot = { episode.Plot } title = {episode.Title } poster = {episode.Poster} />)}
          </Slider>
        </div>:
        <div className="carousel">
        <h1>Movie Title</h1>
        <div className="label"> Season 1 <i className="ion-md-arrow-dropdown"></i></div>
         <Slider {...settings}>
           <div>Getting your info...</div>
         </Slider>
      </div>
      )
  }
}

const mapStateToProps = state => ({
    movieInfo: state.movies.movieInfo, 
})

const mapDispatchToProps = {
    getEpisodes,
}

export default connect(mapStateToProps,mapDispatchToProps)(Carousel);
