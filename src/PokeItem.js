import React, { Component } from 'react';

export default class Pokeitem extends Component {
    render() {
        return (
            <div className="pokecard">
                <h1>{this.props.data.pokemon}</h1>
                <img className="pokeimg" src={this.props.data.url_image} alt={this.props.data.pokemon} />
                <section className="stats">
                    <h3 className="type">Type:</h3> 
                        <p>
                            {this.props.data.type_1}, 
                            {this.props.data.type_2}
                        </p>
                    <h4 className="attack">Attack:</h4>
                        <p>
                            {this.props.data.attack}
                        </p>
                    <h4 className="defense">Defense:</h4>
                        <p>
                            {this.props.data.defense}
                        </p>
                    <h4 className="hp">HP:</h4> 
                        <p>
                            {this.props.data.hp}
                        </p>
                    <h4 className="abilities">Special Abilities:</h4> 
                        <p>
                            {this.props.data.ability_1}
                            <br></br>  
                            {this.props.data.ability_2}
                            <br></br>
                            {this.props.data.ability_hidden}
                        </p>
                </section>
            </div>
        )
    }
}
