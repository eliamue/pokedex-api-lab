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
            <div className="detail-stats" style={{'backgroundColor': `${this.state.pokemonDetail.color_1}`}}>
                {this.state.loading && <Spinner />}
                {!this.state.loading && (
                    <>
                    
                        <h3 className="hidden">{this.props.match.params.id}</h3>

                    <section className="mugshot">
                        <img className="pokeimg" src={this.state.pokemonDetail.url_image} alt={this.state.pokemonDetail.pokemon} />
                        <h1 className="poke-name">{this.state.pokemonDetail.pokemon}</h1>
                        <section className="types">
                            <div className="type1">
                                <h3>Type:</h3>
                                <h4>{this.state.pokemonDetail.type_1}</h4>
                            </div>
                            <div className="type2">
                                {this.state.pokemonDetail.type_2 === 'NA' 
                                ? <p style={{display: "none"}}></p> 
                                : <><h3>Secondary Type:</h3>
                                <h4>{this.state.pokemonDetail.type_2}</h4></>}
                            </div>
                        </section>
                    </section>

                    <section className="battle-stats">
                            <h3>Attack:</h3>
                                <h4>{this.state.pokemonDetail.attack}</h4>
                            <h3>Defense:</h3>
                                <h4>{this.state.pokemonDetail.defense}</h4>
                            <h3>Speed:</h3>
                                <h4>{this.state.pokemonDetail.speed}</h4>
                            <h3>HP:</h3>
                                <h4>{this.state.pokemonDetail.hp}</h4>
                    </section>

                    <section className="abilities">
                        <h4 className="adopt">Adoption price:</h4>
                        <h1 className="price">
                            ${this.state.pokemonDetail.base_experience}
                        </h1>

                            <h3>Special Ability:</h3>
                                <h4>{this.state.pokemonDetail.ability_1}</h4>
                            {this.state.pokemonDetail.ability_2 === 'NA' 
                            ? <p style={{display: "none"}}></p> 
                            : <><h3>Secondary Ability:</h3>
                            <h4>{this.state.pokemonDetail.ability_2}</h4></>}

                            {this.state.pokemonDetail.ability_hidden === 'NA' 
                            ? <p style={{display: "none"}}></p> 
                            : <><h3>Hidden Ability:</h3>
                            <h4>{this.state.pokemonDetail.ability_hidden}</h4></>}
                    </section>
                    </>
                )}
            </div>
        )
    }
}