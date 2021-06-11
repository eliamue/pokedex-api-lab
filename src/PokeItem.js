import React, { Component } from 'react';

export default class Pokeitem extends Component {
    render() {
        return (
            <div className="pokecard">
                <h1>{this.props.data.pokemon}</h1>
                <img className="pokeimg" src={this.props.data.url_image} alt={this.props.data.pokemon} />
                <section className="stats">
                    <h3 className="type">Type:</h3> 
                        {this.props.data.type_1}, {this.props.data.type_2}
                    <h4 className="attack">Attack:</h4>
                        {this.props.data.attack}
                    <h4 className="defense">Defense:</h4>
                        {this.props.data.defense}
                    <h4 className="hp">HP:</h4> 
                        {this.props.data.hp}
                    <h4 className="abilities">Special Abilities:</h4> 
                        {this.props.data.ability_1}, 
                        {this.props.data.ability_2}, 
                        {this.props.data.ability_hidden}
                </section>
            </div>
        )
    }
}
