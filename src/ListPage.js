import React, { Component } from 'react';
import Spinner from './Spinner.js';
import request from 'superagent';
import PokeList from './PokeList.js';
import './App.css'

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class ListPage extends Component {
    state = {
        loading: true,
        pokemonlist: [],
        query: '',
        sortBy: 'asc',
        page: 1
    };

    componentDidMount = async () => {
        await this.fetchData();
    };

    nextPage = async (e) => {
        await this.setState({ 
            page: this.state.page + 1, 
            loading: true
        })
        this.fetchData();
    };

    prevPage = async (e) => {
        await this.setState({ 
            page: this.state.page - 1,
            loading: true 
        })
        this.fetchData();
    };

    handleChange = (e) => {
        this.setState({
        query: e.target.value
        })
    };

    handleSort = async (e) => {
        await this.setState({
        sortBy: e.target.value
        })
    };

    fetchData = async () => {
        const searchParams = new URLSearchParams({
            sort: 'pokemon',
            direction: this.state.direction,
            page: this.state.page
        });

        if (this.state.query) {
            searchParams.set('pokemon', this.state.query)
        };

        const {
            body: { results: data },
        } = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParams.toString()}`
        );

        await sleep(800)
        this.setState({ 
            pokemonlist: data,
            loading: false,
        })
    };

    render() {
        return (
            <>
            <div className="center">
                <input className="input" onChange={this.handleChange} placeholder="Search" />
                <select className="sortby" onChange={this.handleSort}>
                    <option value=''>Sort by</option>
                    <option value='asc'>Ascending</option>
                    <option value='desc'>Descending</option>
                </select>
                <button className="fetch-btn" onClick={this.fetchData}>Fetch!</button>
                    {this.state.loading 
                        ? <Spinner />
                        : <PokeList
                            pokemonlist={this.state.pokemonlist}
                            />
                    }
                <div className="nav-butt">
                    {this.state.page - 1 > 0 && (
                    <button className="prev-butt" onClick={this.prevPage}> Previous ({this.state.page - 1})
                    </button>
                            )}
                    <button className="next-butt" onClick={this.nextPage}> Next ({this.state.page + 1})</button>  
                </div>   
            </div>
            </>
        );
    };
}
