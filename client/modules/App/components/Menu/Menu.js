import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';

const Menu = (props, context) => (
    <div>
        <ul>
            <li><Link to="/home" onlyActiveOnIndex>Home</Link></li>
            <li><Link to="/posts" onlyActiveOnIndex>Posts</Link></li>
            <li><Link to="/about" onlyActiveOnIndex>About</Link></li>
        </ul>
        <div>
            {props.children}
        </div>
        
    </div>
);

Menu.propTypes = {
    children: PropTypes.object.isRequired
}

export default Menu;