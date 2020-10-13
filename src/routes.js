import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import BoxVendedor from './components/Vendedor';
import ListVenda from './components/Venda';
import Header from './components/header';

export default function MainRoutes(){
    return(
        
        <Router>
            <Header />
            <Switch>
                <Route path="/">
                    <BoxVendedor />
                </Route>
                <Route path="/venda">
                </Route>
            </Switch>
        </Router>
    )
}