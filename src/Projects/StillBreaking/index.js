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
                    <h2 className='title'>Still Breaking</h2>
                    <p className='tagline'>Keep Track Of Current Events After The News Cycle Has Moved On</p>
                    <button onClick={this.openModal}>Read More</button>
                    <p className='techUsed'>| React | Python | SQL |</p>
                    <div className='linksContainer'>
                        <a href='https://still-breaking-react.herokuapp.com/' target='_blank' rel="noopener noreferrer">Visit Site</a> 
                        <a href='https://github.com/tbone9/still-breaking-react' target='_blank' rel="noopener noreferrer">GitHub Front-End</a>
                        <a href='https://github.com/tbone9/still-breaking-flask' target='_blank' rel="noopener noreferrer">GitHub Back-End</a>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default StillBreaking;