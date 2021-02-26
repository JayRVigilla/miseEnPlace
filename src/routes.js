import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from "./containers/Home";
import About from './containers/About';
import Contact from './components/Contact';
import Press from './containers/Press';

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about"><About /></Route>
      <Route exact path="/contact"><Contact /></Route>
      <Route exact path="/press"><Press /></Route>
      <Redirect to='/'/>
    </Switch>
  )
}

export default Routes;