import React, { Component } from 'react';
import pic from '../Accessame/accessame1.jpg';
import '../style.css';

class Accessame extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    flipCard = () => {
        document.querySelector('#accessameInner').style.transform = "rotateY(180deg)";
    }

    flipBack = () => {
        document.querySelector('#accessameInner').style.transform = "rotateY(-0deg)";
    }

    render() {
        return (
            <div className='flip-card'>
                <div id='accessameInner' className='card-inner'>
                    <div className='card-front'>
                        <h2 className='title'>Accessame</h2>
                        <img src={pic} alt='screenshot of app' />
                        <div className='infoContainer'>

                            <p className='tagline'>Accessibility Info for Your Favorite Places</p>
                            <p className='techUsed'> React - Python - SQL </p>
                            <p className='flipButton' onClick={this.flipCard}>Details =></p>

                        </div>
                    </div>

                    <div className='card-back'>
                        <div className='back-content'>
                            <h2 className='title'>Accessame</h2>
                            <p>An app to crowdsource accessiblity information for any place in the world. It uses Google places and maps API to access the coordinates of any place and plot that place on a map, with React rendering the front-end. The Python/PostgreSQL backend stores place user info, place data, and place ratings. </p>
                            <div className='linksContainer'>
                                <a href='https://accessame-react.herokuapp.com/' target='_blank' rel="noopener noreferrer">Visit Site</a>
                                <a href='https://github.com/tbone9/accessame-react' target='_blank' rel="noopener noreferrer">GitHub Front-End</a>
                                <a href='https://github.com/tbone9/accessame-flask' target='_blank' rel="noopener noreferrer">GitHub Back-End</a>
                            </div>
                            <p className='flipButton' onClick={this.flipBack}>Back</p>
                        </div>
                    </div>

                </div>
            </div>


        )
    }

}

export default Accessame;