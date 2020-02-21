import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import '../Nav/style.css'

const Nav = () => {

    const [isNavVisible, setIsNavVisible] = useState(true);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 600px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);
        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, [])

    const handleMediaQueryChange = mediaQuery => {
        if(mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }

        return (
            <header className='header'>

                <div className='logo'>TW</div>
                    
                
                    {(!isSmallScreen || !isNavVisible) && (
                        
                        <nav className='nav' onClick={toggleNav}>
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
                        </nav>
                        
                    )}
                
                <button onClick={toggleNav} className='burger'>Menu</button>
                
            </header>
        )
    
}

export default Nav;