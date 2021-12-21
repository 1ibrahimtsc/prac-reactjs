import React, { Component } from 'react';

import { UserConsumer } from './UserContext';

export class CompThree extends Component {
    render(){
        return (
            <UserConsumer>
                {
                    (value) => {
                        return <div>
                        <h1>Hello, {value} and this is from Compt Three </h1>
                    </div>
                    }
                }
            </UserConsumer>
            
        )
    }
}

export default CompThree;