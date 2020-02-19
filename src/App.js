import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import { Grid } from 'semantic-ui-react';

import Nav from './Aside';
import About from './About';
import Projects from './Projects';

class App extends Component {
  render() {
    return (
      <div className='container'>
        
          
              <div className='aside'>
                <Nav  />
              </div>
              
                
                <Switch>
                  <Route path="/About" component={About}/>
                  <Route path="/Projects" component={Projects}/>
                </Switch>

            
        
      </div>
    );
  }
  
}

export default App;
