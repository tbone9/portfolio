import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css'
import logo from './logo.jpg';

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
            <div className='smallNav'>
                <Link to={'/'}>
                    <img src={logo} alt='logo' className='logo' onClick={closeNav} />
                </Link>

                <button onClick={toggleNav} className='burger'>
                    <i className="fa fa-bars fa-4x" aria-hidden="true"></i>
                </button>
            </div>

        </header>
    )

}

export default Nav;