import React, { Component } from 'react'
import { css } from '@emotion/core';
import { ClipLoader } from 'react-spinners';
import Header from './Header';
import { connect } from 'react-redux';
import { initiateBuffer } from '../actions/watchActions';
import { Redirect } from 'react-router-dom';

const override = {
    position: "absolute",
    top: "25%",
    left: "40%",
    display: "inline-block",
    margin: "0 auto",
    bottom: "0"
}

class Transitionpage extends Component {
  componentWillReceiveProps(nextProps){
    if(nextProps.data.title !== "gibberish" && nextProps.fileName === "gibberish"){
        this.props.initiateBuffer(this.props.data, this.props.imdbID, this.props.userID);
    }
  }
  render() {
    return (
        (this.props.fileName !== "gibberish") ? (<Redirect to={{ pathname:"/watch", 
        state: { fileName : this.props.fileName  } }}/>) :  
        <React.Fragment>
          <Header />
        <div className="transiton-box">
          <ClipLoader css={override} sizeUnit={"px"} size={240} color={"#D50000"} loading={true} />
        </div>
        <div className="message-container">
          <h2>{this.props.currentMessage}</h2>
        </div>
        </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
    currentMessage : state.watch.transition_state,
    data : state.watch.data,
    imdbID : state.movies.movieInfo.imdbID,
    userID : state.authData.user_id,
    fileName : state.watch.fileName
})

const mapDispatchToProps = {
  initiateBuffer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Transitionpage);
