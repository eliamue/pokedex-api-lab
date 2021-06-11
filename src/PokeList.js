import React, { Component } from 'react';
import request from 'superagent';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {


    // handleChange = (e) => {
    //     this.setState({
    //         query: e.target.value
    //     })
    // }
    
    // handleClick = async () => {
    //     const query = this.state.query;
    //     const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex`)
    //     console.log(data)
    // }

    // componentDidMount = async () => {
    //     const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?search=${query}`)
    //     this.setState({ pokemon: pokeData.id })
    // }

    render() {
        console.log(this.props)
        return (
            <PokeItem 
                // name={}
                // image={}
                // attack={}
                // defense={}
                // ability={}
            />
            
        )
    }
}
// fetchPokemon = async () => {
//     const pokeData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/`)
// }

