import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.pokemonlist.map((pokemonlist, i) => <PokeItem data={pokemonlist} key={i}/>)}
            </div>
        )
    }
}