import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';

export default function Routes() {
  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
    </Switch>
  )
}
