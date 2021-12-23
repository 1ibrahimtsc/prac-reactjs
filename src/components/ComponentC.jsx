import React, {useContext} from 'react';
import ComponentD from './ComponentD';
import {UserContext, ProfileContext} from '../App';

const ComponentC = () => {

    const username = useContext(UserContext)
    const profile = useContext(ProfileContext)
    return (
        <div>
            <ComponentD />
            <h1> name is {username} and profile is {profile}</h1>
        </div>
    )
}

export default ComponentC