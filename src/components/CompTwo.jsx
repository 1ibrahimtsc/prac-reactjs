import React, { Component } from 'react';
import CompThree from './CompThree';

class CompTwo extends Component {
    render(){
        return (
            <div>
                <CompThree namefromtwo={this.props.namefromone } />
            </div>
        )
    }
}

export default CompTwo;