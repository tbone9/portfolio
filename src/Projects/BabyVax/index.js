import React, { Component } from 'react';
import pic from '../BabyVax/babyvaxShow.jpg';
import '../BabyVax/style.css';

class BabyVax extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        }
    }

    flipCard = () => {
        const card = document.querySelector('.card-inner').style.transform = "rotateY(180deg)";
        console.log(this)
    }

    flipBack = () => {
        document.querySelector('.card-inner').style.transform = "rotateY(-0deg)";
    }

    render() {
        return (
            <div className='flip-card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={pic} alt='screenshot of app' />
                        <div className='infoContainer'>
                            <h2 className='title'>BabyVax</h2>
                            <p className='tagline'>Keep Track Of Your Infant's Vaccinations</p>
                            <button className='flipButton' onClick={this.flipCard}>Read More</button>
                            <p className='techUsed'>| EJS | MongoDB |</p>
                            <div className='linksContainer'>
                                <a href='https://medcheck1.herokuapp.com/' target='_blank' rel="noopener noreferrer">Visit Site</a> 
                                <a href='https://github.com/tbone9/MedCheck' target='_blank' rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className='card-back'>
                        <h2>BabyVax</h2>
                        <p>An app to keep track of your baby's vaccines.</p>
                        <button className='flipButton' onClick={this.flipBack}>Back</button>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default BabyVax;