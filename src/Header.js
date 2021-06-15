import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>Weird Dogs For Sale</h1>
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink exact to="/pokemon">Pokedex</NavLink>
                </div>
            </header>
        )
    }
}
