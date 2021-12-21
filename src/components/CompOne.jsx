import React, {Component } from 'react';
import CompTwo from './CompTwo';

class CompOne extends Component {
    render(){
        return (
            <div>
                <CompTwo namefromone={this.props.name } />
            </div>
        )
    }
}

export default CompOne;