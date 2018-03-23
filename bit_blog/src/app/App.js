import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import About from './pages/AboutPage'



class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/about' component={About} />
      </Switch>
    );
  }
}

export default App;
