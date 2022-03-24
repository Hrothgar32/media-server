import React from 'react';
import store from '../Store';
import Searchbox from './Searchbox';
import './ionicon.scss';
import { logout } from '../actions/authActions';
import { Redirect } from 'react-router-dom';

const onLogoutClick = (e) => {
    store.dispatch(logout())
    return <Redirect to='/login'/>
}

const SecondNav = () => {
  return (
    <div className="secondary-navigation">
        <Searchbox />
        <div className="iconalign">
            <i className="logout ion-md-log-out" onClick={onLogoutClick}></i>
        </div>
    </div>
  )
}

export default SecondNav;
