import React, { Component } from 'react';
import Spinner from './Spinner.js';
import request from 'superagent';
import PokeList from './PokeList.js'

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class ListPage extends Component {
    state= {
        loading: false,
        pokemonlist: [],
        query: '',
        sortBy: 'asc'
    }

    componentDidMount = async () => {
        await this.fetchData();
    }

    handleClick = async () => {
        await this.fetchData()
    }

    handleChange = (e) => {
        this.setState({
        query: e.target.value
        })
    }

    handleSort = async (e) => {
        this.setState({
            sortBy: e.target.value
        })
    }

    fetchData = async () => {
        this.setState({
            loading: true
        })
        
        const URL = this.state.query
            ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortBy}`
            : `http://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${this.state.sortBy}`;

        const data = await request.get(URL)
        console.log(data)
        await sleep(1000)

        this.setState({
            loading: false,
            pokemonlist: data.body.results,
            sortBy: data.body.sort
    })
}

    render() {
        return (
            <div className="center">
                <input className="input" onChange={this.handleChange} />
                <select className="sortby" onChange={this.handleSort}>
                    <option value=''>Sort by</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                <button className="fetch-btn" onClick={this.handleClick}>Fetch!</button>
                    {this.state.loading 
                        ? <Spinner />
                        : <PokeList
                            pokemonlist={this.state.pokemonlist}
                            />
                    }
            </div>
    );
    }
}
