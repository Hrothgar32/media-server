import React, { Component } from 'react';
import Slider from 'react-slick';
import './ionicon.scss';
import { connect } from 'react-redux';
import { getRecommendations } from '../actions/movieActions';
import RecTile from './RecTile';


class MoreCarousel extends Component {

  componentDidMount(){
    this.props.getRecommendations(this.props.movieInfo.Title, this.props.movieInfo.Type);
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
    }
    return (
      (this.props.movieInfo.isRecload) ?
      <div className="carousel">
        <h1>{this.props.movieInfo.Title}</h1>
        <Slider {...settings}>
          {this.props.movieInfo.recommendations.map((rec) => <RecTile plot = { rec.Plot} title = {rec.Title} poster = {rec.Poster} imdbID = {rec.imdbID} />)}
        </Slider>
      </div>:
      <div className="carousel">
        <h1>{this.props.movieInfo.Title}</h1>
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
    getRecommendations
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreCarousel);
