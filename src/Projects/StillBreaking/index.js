import React, { Component } from 'react';
import pic from '../StillBreaking/still-breaking4.jpg';
import '../style.css';

class StillBreaking extends Component {
    constructor () {
        super();
        this.state = {
            showModal: false
        }
    }

    flipCard = () => {
        const card = document.querySelector('#breakingInner').style.transform = "rotateY(180deg)";
        console.log(this)
    }

    flipBack = () => {
        document.querySelector('#breakingInner').style.transform = "rotateY(-0deg)";
    }

    render() {
        return (
            <div className='flip-card'>
                <div id='breakingInner' className='card-inner'>
                    <div className='card-front'>
                        <img src={pic} alt='screenshot of app' />
                        <div className='infoContainer'>
                            <h2 className='title'>Still Breaking</h2>
                            <p className='tagline'>Keep Track of Current Events After the News Cycle Has Moved On</p>
                            <button className='flipButton' onClick={this.flipCard}>Read More</button>
                            <p className='techUsed'>| React | Python | SQL |</p>
                            <div className='linksContainer'>
                                <a href='https://still-breaking-react.herokuapp.com/' target='_blank' rel="noopener noreferrer">Visit Site</a> 
                                <a href='https://github.com/tbone9/still-breaking-react' target='_blank' rel="noopener noreferrer">GitHub Front-End</a>
                                <a href='https://github.com/tbone9/still-breaking-flask' target='_blank' rel="noopener noreferrer">GitHub Back-End</a>
                            </div>
                        </div>
                    </div>

                    <div className='card-back'>
                        <div className='back-content'>
                            <h2>Still Breaking</h2>
                            <p>The news cycle is fast and hectic, and often will move on to new topics before you've had a chance to digest the present. This app allows you to search for articles on news topics, add them to a collection, and add your own notes for each topic. Articles are searched through the News API.</p>
                            <button className='flipButton' onClick={this.flipBack}>Back</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    
}

export default StillBreaking;