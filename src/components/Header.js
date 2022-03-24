import React, { Component } from 'react'
import logo from '../assets/logo.png'
import SecondNav from './SecondNav';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <nav>
        <div className="logo-container">
          <Link to="/"><img className="main-logo" src={logo} alt="idk" /></Link>
        </div>
        <SecondNav />
      </nav>
    )
  }
}

export default Header;
