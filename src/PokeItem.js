import React, { Component } from 'react';

export default class Pokeitem extends Component {
    render() {
        return (
            <div className="pokecard">
                <h1>{this.props.data.pokemon}</h1>

                <img 
                className="pokeimg" 
                src={this.props.data.url_image} 
                alt={this.props.data.pokemon} 
                />

                <section className="stats">
                    <div className="type">
                        <h3>Type:</h3> 
                        <p>
                            {this.props.data.type_1} 
                        </p>
                    </div>
                    <div className="attack">
                        <h4>Attack:</h4>
                        <p>
                            {this.props.data.attack}
                        </p>
                    </div>
                    <div className="defense">
                        <h4>Defense:</h4>
                        <p>
                            {this.props.data.defense}
                        </p>
                    </div>
                    <div className="hp">
                        <h4>HP:</h4>
                        <p>
                            {this.props.data.hp}
                        </p>
                    </div>
                    <div className="abilities">
                        <h4>Special Ability:</h4> 
                        <p>
                            {this.props.data.ability_1}
                        </p>
                    </div>
                </section>
            </div>
        )
    }
}
