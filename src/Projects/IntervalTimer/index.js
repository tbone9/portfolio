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

    openModal = () => {
        console.log('open modal')
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        console.log('close modal')
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <div className='card'>
                <img src={pic} alt='screenshot of app' />
                <div className='infoContainer'>
                    <h2 className='title'>IntervalTimer</h2>
                    <p className='tagline'>A Workout Timer That Juggles Minutes, Seconds, Rounds, and a Rest Period</p>
                    <button onClick={this.openModal}>Read More</button>
                    <p className='techUsed'>| React |</p>
                    <div className='linksContainer'>
                        <a href='https://interval-timer-f8616.firebaseapp.com/' target='_blank' rel="noopener noreferrer">Visit Site</a> 
                        <a href='https://github.com/tbone9/interval-timer' target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default IntervalTimer;