import React from 'react';
import '../Intro/style.css';

function Intro() {
    return (
        <React.Fragment>
            <div className='introContainer'>
                <h1>Tyler Walker</h1>
                <h2>Web Developer</h2>
                <div className='linkContainer'>
                    <a href='https://www.linkedin.com/in/tylerjwalker1/' target='_blank' rel="noopener noreferrer"><i className="fa fa-linkedin-square fa-4x" aria-hidden="true"></i><span className='icons'>GitHub</span></a>
                    <a href='https://github.com/tbone9' target='_blank' rel="noopener noreferrer"><i className="fa fa-github-square fa-4x" aria-hidden="true"></i><span className='icons'>GitHub</span></a>
                    <a href="mailto:tylerjwalker@gmail.com" target="_top"><i className="fa fa-envelope fa-4x" aria-hidden="true"></i><span className='icons'>GitHub</span></a>
                    <a href='https://www.instagram.com/tbone_walker/' target='_blank' rel="noopener noreferrer"><i className="fa fa-instagram fa-4x" aria-hidden="true"></i><span className='icons'>Instagram</span></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Intro;