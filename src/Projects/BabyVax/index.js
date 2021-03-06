import React, { Component } from 'react';
import pic from '../BabyVax/babyvaxShow.jpg';
import '../style.css';

class BabyVax extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    flipCard = () => {
        document.querySelector('#babyVaxInner').style.transform = "rotateY(180deg)";
        console.log(this)
    }

    flipBack = () => {
        document.querySelector('#babyVaxInner').style.transform = "rotateY(-0deg)";
    }

    render() {
        return (
            <div className='flip-card'>
                <div id='babyVaxInner' className='card-inner'>
                    <div className='card-front'>
                        <h2 className='title'>BabyVax</h2>
                        <img src={pic} alt='screenshot of app' />
                        <div className='infoContainer'>

                            <p className='tagline'>Keep Track of Your Infant's Vaccinations</p>
                            <p className='techUsed'> Node - MongoDB - Express </p>
                            <p className='flipButton' onClick={this.flipCard}>Details =></p>

                        </div>
                    </div>

                    <div className='card-back'>
                        <div className='back-content'>
                            <h2 className='title'>BabyVax</h2>
                            <p>An app to keep track of your baby's vaccines. Built with Node, Express, and MongoDB. Look up required vaccines on the front page based on your baby's age. Log in to keep track of your baby over time and add completed vaccines as you get them.</p>
                            <div className='linksContainer'>
                                <a href='https://medcheck1.herokuapp.com/' target='_blank' rel="noopener noreferrer">Visit Site</a>
                                <a href='https://github.com/tbone9/MedCheck' target='_blank' rel="noopener noreferrer">GitHub</a>
                            </div>
                            <p className='flipButton' onClick={this.flipBack}>Back</p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }

}

export default BabyVax;