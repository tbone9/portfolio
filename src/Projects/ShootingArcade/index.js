import React, { Component } from 'react';
import pic from '../ShootingArcade/arcade2.jpg';
import '../style.css';

class ShootingArcade extends Component {
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
                    <h2 className='title'>Shooting Arcade</h2>
                    <p className='tagline'>Browser Game Where Targets Appear and You Shoot Them</p>
                    <button onClick={this.openModal}>Read More</button>
                    <p className='techUsed'>| HTML | CSS | Javascript |</p>
                    <div className='linksContainer'>
                        <a href='https://tbone9.github.io/arcade-shooter/' target='_blank' rel="noopener noreferrer">Visit Site</a> 
                        <a href='https://github.com/tbone9/arcade-shooter' target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default ShootingArcade;