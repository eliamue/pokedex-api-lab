import React, { Component } from 'react';
import Spinner from './Spinner.js';
import request from 'superagent';
import PokeList from './PokeList.js'

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class ListPage extends Component {
    state = {
        loading: true,
        list: [],
        query: ''
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

    fetchData = async () => {
    this.setState({
        loading: false,
        });

        const URL = this.state.query
            ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?search=${this.state.query}`
            : 'http://pokedex-alchemy.herokuapp.com/api/pokedex';

        const data = await request.get(URL)
        console.log(data)
        await sleep(3000)

    this.setState({
        loading: false,
        list: data.body.results
    })
}

    render() {
        // console.log(this.state.list)
        return (
            <div className="center">
                <PokeList
                pokemonlist={this.state.list}
                
                />
                <input onChange={this.handleChange} />
                <button onClick={this.handleClick}>Fetch!</button>
                {/* {this.state.loading 
                    ? <Spinner />
                    : this.state.list.map(data => <div> {data} </div>)} */}
            
            </div>
            
    );
    }
}
