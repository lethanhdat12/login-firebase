import React, { Component } from 'react'
import Login from './Login'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect, NavLink } from "react-router-dom";
import Register from './Register';
export default class Authentication extends Component {

    render() {
        const { signEmailPass, loginProvider, logOut,createAccount } = this.props;
        return (
            <BrowserRouter>
                <div className="card">
                    <div className="btnLogin" style={{textAlign : 'right'}}>
                        <NavLink to="/sign-in">
                            <button className="btn btn-primary mx-1 mt-2">Login</button>
                        </NavLink>
                        <NavLink to="/register">
                            <button className="btn btn-warning mx-1 mt-2">Register</button>
                        </NavLink>
                    </div>
                    <div className="card-header card_headerCT" style={{ height: '50px' }}>
                        <img src="/img/firebase.png" alt="" className="img img-fluid img_header" />
                    </div>
                    <div className="card-body">
                        <Switch>
                            <Redirect exact from="/" to="/sign-in" />
                            <Route exact path="/sign-in">
                                <Login
                                    loginEmailPass={signEmailPass}
                                    loginFace={loginProvider}
                                    loginGoogle={loginProvider}
                                    logout={logOut} />
                            </Route>
                            <Route path="/register" >
                                    <Register createAccount = {createAccount}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
