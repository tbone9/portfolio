import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css'

function Nav() {

    const [isNavVisible, setIsNavVisible] = useState(true);

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    let closeNav = () => {
        setIsNavVisible(!false);
    }

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
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }

    return (
        <header className='header'>
            {/* <Link to={'/'}>
                <div className='logo' onClick={closeNav}>TW</div>
            </Link> */}



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
                            to={'/Projects'}>
                            Projects</NavLink>
                    </div>
                    <div className='link'>
                        <NavLink
                            exact
                            activeClassName='active'
                            className='navLink'
                            to={'/About'}>
                            About</NavLink>
                    </div>
                </nav>

            )}

            <button onClick={toggleNav} className='burger'>
                <i className="fa fa-bars fa-4x" aria-hidden="true"></i>
            </button>

        </header>
    )

}

export default Nav;