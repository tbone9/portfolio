import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Nav from './Nav';
import About from './About';
import Projects from './ProjectsContainer';
import Intro from './Intro';

class App extends Component {
  state = {
    navOpen: false
  }
  
  render() {
    return (
      <div className='appContainer'>
        
          
              <div className='aside'>
                <Nav  navOpen={this.state.navOpen}/>
              </div>
              
              <div className='main'>
                <Switch>
                  <Route exact path="/" component={Intro}/>
                  <Route exact path="/About" component={About}/>
                  <Route exact path="/Projects" component={Projects}/>
                </Switch>
              </div>
            
        
      </div>
    );
  }
  
}

export default App;
