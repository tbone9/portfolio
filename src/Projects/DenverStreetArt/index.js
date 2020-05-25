import React, { Component } from 'react';
import pic from '../DenverStreetArt/hood.png';
import '../style.css';

class DenverStreetArt extends Component {
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
                        <img src={pic} alt='screenshot of app' />
                        <div className='infoContainer'>
                            <h2 className='title'>Denver Street Art</h2>
                            <p className='tagline'>Take a Virtual Tour of Denver's Street Art</p>
                            <button className='flipButton' onClick={this.flipCard}>Read More</button>
                            <p className='techUsed'>| React | Firebase |</p>
                            <div className='linksContainer'>
                                <a href='https://denver-art-gallery.web.app/' target='_blank' rel="noopener noreferrer">Visit Site</a>
                                <a href='https://github.com/tbone9/streetartdenver' target='_blank' rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <div className='card-back'>
                        <div className='back-content'>
                            <h2>Denver Street Art</h2>
                            <p>This app takes you on a virtual tour of Denver's street art. Split in to four regions, each area has unique and stunning works of art. A protected 'admin' area allows for authorized users to add and edit artwork. This project demonstrates contintued improvement in React understanding, as well as implementation of Firebase Auth, Firestore, and Storage. </p>
                            <button className='flipButton' onClick={this.flipBack}>Back</button>
                        </div>
                    </div>

                </div>
            </div>


        )
    }

}

export default DenverStreetArt;