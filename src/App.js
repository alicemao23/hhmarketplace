import React, { Component } from 'react';
import {AppBar, Tabs, Tab, RaisedButton, IconButton} from 'material-ui';
import { Switch, Route } from 'react-router-dom';
import NavHeader from './Nav'; 
import Home from './Home';
import About from './About';
import Footer from './Footer';
import './App.css';
import 'materialize-css'
// import $ from 'jquery';
// import 'foundation-sites'; 


class App extends Component {
  render() {

    return (
      <div className="App">
        <NavHeader/>
          <Switch> 
              <Route exact path="/" render={()=><Home/>}/>
              <Route path="/aboutus" render={()=><About/>}/>
          </Switch>
      <Footer />
      </div>
    );
  }
}


export default App;
