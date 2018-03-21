import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Footer from './partials/Footer';


class App extends Component {

  render() {
  
    return (
      <React.Fragment>
      <Switch>
          <Route exact path='/' component={Home} /> 
          <Route path ='/about'  component={About} />
      </Switch>
      <Footer title='© 2018 Copyright BIT'/>
      </React.Fragment>
    );
  }
}

export default App;

