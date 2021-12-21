import React, { Component } from 'react';
import CompThree from './CompThree';
import {UserConsumer} from './UserContext';

class CompTwo extends Component {
    render(){
        return (
            <UserConsumer>
                {(value)=>{
                    return <div>
                        <CompThree  />
                        <h1>Hello, {value} and this is from Component two </h1>
                    </div>
                }}
            </UserConsumer>
        )
    }
}

export default CompTwo;