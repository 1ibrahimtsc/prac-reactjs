import { useReducer } from 'react';

const initialState = 5;
const reducer = (state, action)=>{
    switch (action) {
        case 'increment':
            return state + 7;
        case 'decrement':
            return state - 3;
        case 'reset': 
            return initialState;   
        default:
            return state;
    }
};

export default function Counter(){
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
        </div>
    )
}