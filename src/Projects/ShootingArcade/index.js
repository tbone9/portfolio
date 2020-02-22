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

    flipCard = () => {
        const card = document.querySelector('#arcadeInner').style.transform = "rotateY(180deg)";
        console.log(this)
    }

    flipBack = () => {
        document.querySelector('#arcadeInner').style.transform = "rotateY(-0deg)";
    }

    render() {
        return (
            <div className='flip-card'>
                <div id='arcadeInner' className='card-inner'>
                    <div className='card-front'>
                        <img src={pic} alt='screenshot of app' />
                        <div className='infoContainer'>
                            <h2 className='title'>Shooting Arcade</h2>
                            <p className='tagline'>Browser Game Where Targets Appear and You Shoot Them</p>
                            <button className='flipButton' onClick={this.flipCard}>Read More</button>
                            <p className='techUsed'>| HTML | CSS | Javascript |</p>
                            <div className='linksContainer'>
                                <a href='https://tbone9.github.io/arcade-shooter/' target='_blank' rel="noopener noreferrer">Visit Site</a> 
                                <a href='https://github.com/tbone9/arcade-shooter' target='_blank' rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className='card-back'>
                        <div className='back-content'>
                            <h2>Shooting Arcade</h2>
                            <p>A browser game where targets appear and move accross the screen. You shoot them and get points. The game keeps track of shots fired, missed, and hit, as well as keeping track of multiple scores. The audio and sound effects are kinda neat, too</p>
                            <button className='flipButton' onClick={this.flipBack}>Back</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default ShootingArcade;