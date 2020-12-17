import React, { Component } from 'react'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <p style={{marginBottom : '10px'}}> xin chao : {this.props.displayName} </p> 
                <button class="btn btn-primary" onClick = {this.props.logout}>logout</button>
            </div>
        )
    }
}
