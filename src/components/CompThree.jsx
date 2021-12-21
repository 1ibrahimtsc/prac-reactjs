import React, { Component } from 'react';

export class CompThree extends Component {
    render(){
        return (
            <div>
                <h1>Component Three and name is {this.props.namefromtwo }</h1>
            </div>
        )
    }
}

export default CompThree;