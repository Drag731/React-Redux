import React, { Component } from 'react';
import { Link } from 'react-router'

class HeaderMenu extends Component {

    render() {

        return (
            <div className='menu'>
                <div className="logo-img">
                    <img src="logo.svg" alt="logo" />
                </div>
                <ul className="listOfMenu">
                    <li className="item-list"><Link to='/home' className="item-link" activeClassName="active">Home</Link></li>
                    <li className="item-list"><Link to='/movies' className="item-link" activeClassName="active">Movies</Link></li>
                    <li className="item-list"><Link to='/about' className="item-link" activeClassName="active">About</Link></li>
                </ul>
            </div>
        );
    }
}

export default HeaderMenu;