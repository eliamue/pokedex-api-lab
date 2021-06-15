import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <img className="spinner" src="https://64.media.tumblr.com/c99a579db3ae0fc164bf4cca148885d3/tumblr_mjgv8kEuMg1s87n79o1_400.gif" alt="pikachu running"></img> Loading... loading... loading...
            </div>
        )
    }
}
