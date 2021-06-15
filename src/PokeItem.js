import React, { Component } from 'react';
import './App.css'

export default class Pokeitem extends Component {
    render() {
        return (
            <div className="pokecard">
                <h1 className="name">{this.props.data.pokemon}</h1>
                <div className="type">
                    <h3>
                        {this.props.data.type_1} 
                    </h3>
                </div>
                <img 
                className="pokeimg" 
                src={this.props.data.url_image} 
                alt={this.props.data.pokemon} 
                />
            </div>
        )
    }
}
