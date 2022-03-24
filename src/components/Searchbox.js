import React, { Component } from 'react';
import './ionicon.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { search } from '../actions/movieActions';

class Searchbox extends Component {
    static propTypes = {
        search: PropTypes.func.isRequired,
        movies: PropTypes.array,
        isSearching: PropTypes.bool   
    }

  constructor(props){
      super(props);
      this.state = {
          searchdata : '',
          timeout: null
      }
  }

  onChange = (e) =>{
    this.setState({ searchdata : e.target.value });
  }

  onKeyUp = () =>{
      if(this.state.timeout){
          clearTimeout(this.state.timeout);
      } 
      this.setState({
          timeout : setTimeout( () => {
              this.props.search(this.state.searchdata);
          }, 500)
      });
  }

  render() {
    return (
    <div className="search">
        <div className="search_bar">
            <input id="searchOne" type="checkbox"/>
            <label htmlFor="searchOne">
                <i className="icon ion-md-search"/>
                <i className="last icon ion-md-close"/>
                <p>|</p>
            </label>
            <input value={this.state.searchdata} onKeyUp= {this.onKeyUp} onChange= { this.onChange } placeholder="Search..." type="text" />
        </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
    movies : state.movies.movies
})

export default connect(mapStateToProps, { search })(Searchbox);
