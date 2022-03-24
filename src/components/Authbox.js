import React, { Component } from 'react'
import logo from '../assets/logo.png';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class Authbox extends Component {
  constructor(props){
    super(props);
    this.state = {
        username: '',
        password: ''
    }
  }

  static propTypes = {
    login: PropTypes.func.isRequired,
    authenticated: PropTypes.bool
  }

  onSubmit = (e) => {
    e.preventDefault();
    const authData = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.login(authData);
  }

  render() {
    if(this.props.authenticated){
      return <Redirect to='/' />
    }
    return (
      <div id="vertical-flip" className="card">  
        <div className="flip">
          <div className="front">
            <div className="logo">
            <img src={logo} alt="The is not available"/>
            </div>
          </div>

          <div className="back">
            <form onSubmit={this.onSubmit}>
              <div className="box-input">
                <input className="auth-input" type="text" name="username" value={this.state.username}
                onChange={(e) => this.setState({username : e.target.value})} placeholder="Username" required/><br/>
                <input className="auth-input" type="password" name="password" value={this.state.password}
                onChange={(e) => this.setState({password : e.target.value})} placeholder="Password" required/><br/>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.authData.authenticated,
})

export default connect(mapStateToProps, { login })(Authbox);