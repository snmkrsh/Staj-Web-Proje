import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";


import Sorgu from "./Sorgu/Sorgu";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                   
                    <Route path="/Sorgu" component={Sorgu} />
                </Switch>
            </Router>
        )
    }
}
