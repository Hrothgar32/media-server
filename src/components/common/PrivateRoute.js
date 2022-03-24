import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, authData, 
    ...rest }) => (
        <Route
            {...rest}
            render={props => {
                if(authData.isLoading){
                    return <h2>Loading...</h2>
                }
                else if(!authData.authenticated){
                    return <Redirect to="/login" />;
                } 
                else{
                    return <Component {...props} />;   
                }
            }} 
        />
    );

const mapStateToProps = state => ({
    authData: state.authData
})

export default connect(mapStateToProps)(PrivateRoute);