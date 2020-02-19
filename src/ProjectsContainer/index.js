import React, { Component } from 'react';

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
                
                <div>
                    <Accessame />
                    <BabyVax />
                    <IntervalTimer />
                    <ShootingArcade />
                    <StillBreaking />
                </div>
                
            </React.Fragment>
        )
    }
}

export default Projects;