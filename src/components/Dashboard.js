import React, { Component } from 'react';
import Header from './Header';
import Movieboard from './Movieboard';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <Movieboard />
      </div>
    )
  }
}

export default Dashboard;
