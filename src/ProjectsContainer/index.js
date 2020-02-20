import React, { Component } from 'react';
import '../ProjectsContainer/style.css';

import StillBreaking from '../Projects/StillBreaking';
import Accessame from '../Projects/Accessame';
import ShootingArcade from '../Projects/ShootingArcade';
import BabyVax from '../Projects/BabyVax';
import IntervalTimer from '../Projects/IntervalTimer';



class Projects extends Component {
    render() {
        return (
            <React.Fragment>
                <h2>My Projects!</h2>
                
                <div id='container'>
                    <div className='project'>
                        <Accessame />
                    </div>
                    <div className='project'>
                        <BabyVax />
                    </div>
                    <div className='project'>
                        <IntervalTimer />
                    </div>
                    <div className='project'>
                        <ShootingArcade />
                    </div>
                    <div className='project'>
                        <StillBreaking />
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Projects;