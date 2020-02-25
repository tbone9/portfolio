import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Nav from './Nav';
import About from './About';
import Projects from './ProjectsContainer';
import Intro from './Intro';

class App extends Component {
  // state = {
  //   navOpen: false
  // }

  // closeNav = (e) => {
  //   console.log(e.currentTarget.className)
  //   if(e.currentTarget.className === 'appContainer') {
  //     this.setState({
  //       navOpen: false
  //     })
  //   }
  // }

  // openNav = () => {
  //   this.setState({
  //     navOpen: true
  //   })
  // }
  
  render() {
    return (
      <div className='appContainer' onClick={this.closeNav}>
        
          
              <div className='aside'>
                <Nav />
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
