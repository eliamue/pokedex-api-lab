import React, { Component } from 'react';

export default class Pokeitem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <img src={this.props.image} alt='' />
                <section className="stats">
                    <p>Attack: {this.props.attack}</p>
                    <p>Defense: {this.props.defense}</p>
                    <p>Special Ability: {this.props.ability}</p>
                </section>
            </div>
        )
    }
}
