import React, { Component } from 'react';
import request from 'superagent';
import './Details.css'
import Spinner from './Spinner.js';


const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class PokemonDetail extends Component {
    state = {
        pokemonDetail: {},
        loading: false
    };

    componentDidMount() {
        this.fetchDetail();
    }

    fetchDetail = async () => {
        this.setState({ loading: true });
        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.id}`
        );

        await sleep(1000)
        this.setState({ pokemonDetail: data.body });
        this.setState({ loading: false })
    }

    render() {
        return (
            <div>
                {this.state.loading && <Spinner />}
                {!this.state.loading && (
                    <>
                        <h3>{this.props.match.params.id}</h3>
                        <h1 className="poke-name">{this.state.pokemonDetail.pokemon}</h1>
                        <img className="pokeimg" src={this.state.pokemonDetail.url_image} alt={this.state.pokemonDetail.pokemon} />

                    <section className="types">
                        <h3>Type 1:</h3>
                            <h4>{this.state.pokemonDetail.type_1}</h4>
                        <h3>Type 2:</h3>
                            <h4>{this.state.pokemonDetail.type_2}</h4>
                    </section>

                    <section className="battle-stats">
                        <h2>Battle Stats</h2>
                            <h3>Attack:</h3>
                                <h4>{this.state.pokemonDetail.attack}</h4>
                            <h3>Defense:</h3>
                                <h4>{this.state.pokemonDetail.defense}</h4>
                            <h3>HP:</h3>
                                <h4>{this.state.pokemonDetail.hp}</h4>
                    </section>

                    <section className="abilities">
                        <h2>Special Ablities</h2>
                            <h3>Ability 1:</h3>
                                <h4>{this.state.pokemonDetail.ability_1}</h4>
                            <h3>Ablity 2:</h3>
                                <h4>{this.state.pokemonDetail.ability_2}</h4>
                            <h3>Hidden Ability:</h3>
                                <h4>{this.state.pokemonDetail.ability_hidden}</h4>
                    </section>
                    </>
                )}
            </div>
        )
    }
}