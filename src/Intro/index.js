import React from 'react';
import '../Intro/style.css';

const Intro = () => {
    return (
        <React.Fragment>
            <div className='introContainer'>
                <h1>Tyler Walker</h1>
                <h2>Web Developer</h2>
                <div className='linkContainer'>
                    <a href='https://www.linkedin.com/in/tylerjwalker1/' target='_blank' rel="noopener noreferrer">Linked In</a>
                    <a href='https://github.com/tbone9' target='_blank' rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Intro;