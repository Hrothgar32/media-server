import React, { Component } from 'react';
import Video from './components/Video';
import Authbox from './components/Authbox';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Transitionpage from './components/Transitionpage';
import store from './Store';
import Dashboard from './components/Dashboard';
import { loadUser } from './actions/authActions';

class App extends Component {

  componentWillMount(){
    // store.dispatch(loadUser())
  }

  render() {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/transition" component={Transitionpage} />
              <Route exact path="/" component={Dashboard}/>
              <Route exact path="/watch" component={Video}/>
              <Route exact path="/login" component={Authbox}/>
            </Switch>
          </div>
        </Router>
    );
  }
}


export default App;
