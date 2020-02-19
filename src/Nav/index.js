import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav/style.css'

const Nav = () => {
    return (
        <React.Fragment>
            <h2>Nav</h2>

            <div className='link-group'>
                <div className='link'>
                    <Link to={'/'}>Home</Link>
                </div>
                <div className='link'>
                    <Link to={'/About'}>About</Link>
                </div>
                <div className='link'>
                    <Link to={'/Projects'}>Projects</Link>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default Nav;