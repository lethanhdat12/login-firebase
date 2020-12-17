import React, { Component } from 'react'
import {BrowserRouter as Router,Switch,Route,Link,useParams, BrowserRouter} from "react-router-dom";
import Login from './Login';
import Register from './Register';
export default class DirectForm extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/sign-in" component = {Login}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
