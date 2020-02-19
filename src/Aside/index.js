import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <React.Fragment>
            <h2>Aside</h2>
            <Link to={'/About'}>About</Link>
            <Link to={'/Projects'}>Projects</Link>
        </React.Fragment>
    )
}

export default Nav;