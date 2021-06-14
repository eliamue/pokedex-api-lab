import React, { Component } from 'react';
import request from 'superagent';
import './App.css'
import Spinner from './Spinner.js'

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
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.id}`
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
                        <h2>Pokemon Details!</h2>
                        <h3>{this.props.match.params.id}</h3>
                        <h3>{this.state.pokemonDetail.pokemon}</h3>
                    </>
                )}
            </div>
        )
    }
}