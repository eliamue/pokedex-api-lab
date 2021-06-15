import React, { Component } from 'react';
import PokeItem from './PokeItem.js';
import { Link } from 'react-router-dom';

export default class PokeList extends Component {
    render() {
        return (
            <div className="poke-list">
                {this.props.pokemonlist.map((pokemonlist, i) => (
                <Link key={pokemonlist.id} to={`/pokemon/${pokemonlist._id}`}>
                    <PokeItem data={pokemonlist} key={i} />
                </Link>
                ))}
            </div>
        );
    }
}