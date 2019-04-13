import * as React from 'react';
import {NavLink} from 'react-router-dom';

export default class TopBar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                <div className='container'>
                    <NavLink className='navbar-brand' to='/'>QuidQuo</NavLink>
                    <button className='navbar-toggler' type='button' data-toggle='collapse'
                            data-target='#navbar-nav-dropdown'
                            aria-controls='navbar-nav-dropdown' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'/>
                    </button>
                    <div className='collapse navbar-collapse' id='navbar-nav-dropdown'>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/blog'>Blog</NavLink>
                            </li>
                            <li className='nav-item'>
                                <NavLink className='nav-link' to='/tools'>Tools</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}