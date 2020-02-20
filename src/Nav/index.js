import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Nav/style.css'

const Nav = () => {
    
        return (
            <React.Fragment>
                <h2>Nav</h2>
    
                <div className='link-group'>
                    <div className='link'>
                        <NavLink 
                        exact
                        activeClassName='active'
                        className='navLink'
                        to={'/'}>
                            Home</NavLink>
                    </div>
                    <div className='link'>
                        <NavLink 
                        exact
                        activeClassName='active'
                        className='navLink'
                        to={'/About'}>
                            About</NavLink>
                    </div>
                    <div className='link'>
                        <NavLink 
                        exact
                        activeClassName='active'
                        className='navLink'
                        to={'/Projects'}>
                            Projects</NavLink>
                    </div>
                </div>
                
            </React.Fragment>
        )
    
}

export default Nav;