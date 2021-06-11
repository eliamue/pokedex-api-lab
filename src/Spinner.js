import React, { Component } from 'react'

export default class Spinner extends Component {
    render() {
        return (
            <div className="spinner">
                <img src="https://64.media.tumblr.com/c99a579db3ae0fc164bf4cca148885d3/tumblr_mjgv8kEuMg1s87n79o1_400.gif" alt="pikachu running"></img> Loading... loading... loading...
            {/* <img src="https://i.pinimg.com/originals/e4/ae/17/e4ae172d255a14f58be19fdb45a74447.gif" alt="pika"></img> */}
            </div>
        )
    }
}
