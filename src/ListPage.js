import React, { Component } from 'react';
import Spinner from './Spinner.js';
import request from 'superagent';
import PokeList from './PokeList.js'

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class ListPage extends Component {
    state = {
        loading: false,
        pokemonlist: [],
        query: '',
        sortBy: 'asc',
        page: 1
    };

    componentDidMount = async () => {
        await this.fetchData();
    };

    nextPage = async (e) => {
        await this.setState({ page: this.state.page + 1 })
        this.fetchData();
    };

    prevPage = async (e) => {
        await this.setState({ page: this.state.page - 1 })
        this.fetchData();
    };

    // handleClick = async () => {
    //     await this.fetchData()
    // };

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

        // const location = {pathname: this.props.location.pathname,
        // search: searchParams.toString()
        // this.props.history.push(location);
        // this.setState({
        //     loading: true,
        // })
        await sleep(1000)
        this.setState({ 
            pokemonlist: data,
            loading: false,
        })
    };
        
    //const URL = this.state.query
    //    ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortBy}`
    //     : `http://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${this.state.sortBy}`;


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
                        {this.state.page - 1 > 0 && (
                                <button onClick={this.prevPage}> Previous Page ({this.state.page - 1})
                                </button>
                            )}
                    <button onClick={this.nextPage}> Next Page ({this.state.page + 1})</button>
            </div>
            </>
    );
};
}
