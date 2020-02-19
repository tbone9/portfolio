import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { Grid } from 'semantic-ui-react';

import Nav from './Nav';
import About from './About';
import Projects from './ProjectsContainer';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className='container'>
        
          
              <div className='aside'>
                <Nav  />
              </div>
              
                
                <Switch>
                  <Route exact path="/" component={Intro}/>
                  <Route exact path="/About" component={About}/>
                  <Route exact path="/Projects" component={Projects}/>
                </Switch>

            
        
      </div>
    );
  }
  
}

export default App;
