import React, { Component } from 'react';
import pic from '../BabyVax/babyvaxShow.jpg';
import '../style.css';

class BabyVax extends Component {
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
                    <h2 className='title'>BabyVax</h2>
                    <p className='tagline'>Keep Track Of Your Infant's Vaccinations</p>
                    <button onClick={this.openModal}>Read More</button>
                    <p className='techUsed'>| EJS | MongoDB |</p>
                    <div className='linksContainer'>
                        <a href='https://medcheck1.herokuapp.com/' target='_blank' rel="noopener noreferrer">Visit Site</a> 
                        <a href='https://github.com/tbone9/MedCheck' target='_blank' rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default BabyVax;