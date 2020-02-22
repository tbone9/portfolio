import React, { Component } from 'react';
import pic from '../IntervalTimer/interval-timer.jpg';
import '../style.css';

class IntervalTimer extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        }
    }

    flipCard = () => {
        document.querySelector('#intervalInner').style.transform = "rotateY(180deg)";
    }

    flipBack = () => {
        document.querySelector('#intervalInner').style.transform = "rotateY(-0deg)";
    }

    render() {
        return (
            <div className='flip-card'>
                <div id='intervalInner' className='card-inner'>
                    <div className='card-front'>
                        <img src={pic} alt='screenshot of app' />
                        <div className='infoContainer'>
                            <h2 className='title'>IntervalTimer</h2>
                            <p className='tagline'>A Workout Timer That Juggles Minutes, Seconds, Rounds, and a Rest Period</p>
                            <button className='flipButton' onClick={this.flipCard}>Read More</button>
                            <p className='techUsed'>| React |</p>
                            <div className='linksContainer'>
                                <a href='https://interval-timer-f8616.firebaseapp.com/' target='_blank' rel="noopener noreferrer">Visit Site</a> 
                                <a href='https://github.com/tbone9/interval-timer' target='_blank' rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className='card-back'>
                        <div className='back-content'>
                            <h2>Interval Timer</h2>
                            <p>An app to use during a workout that keeps track of rounds, minutes, seconds, and a rest period. While the front end is relatively simple, the logic to manage the intervals is fairly complex. Rounds, minutes, and seconds are managaged in one interval, while a rest period is a separate interval that is called depending on certain conditions. </p>
                            <button className='flipButton' onClick={this.flipBack}>Back</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default IntervalTimer;