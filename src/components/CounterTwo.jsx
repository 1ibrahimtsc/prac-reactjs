import React, { useReducer } from 'react';

const initialState = {value: 0, value2: 10};
const reducer = (state, action)=>{
    switch (action.type) {
        case 'increment':
            return {...state, value: state.value + action.value}
        case 'decrement':
            return {...state, value: state.value - action.value}
        case 'increment2':
            return {...state, value2: state.value2 + action.value}
            case 'decrement2':
                return {...state, value2: state.value2 - action.value}
        case 'reset': 
            return initialState;   
        default:
            return state;
    }
};

export default function CounterTwo(){
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>
                <p>Counter One: {count.value}</p>
                <button onClick={()=> dispatch({type: 'increment', value:1 })}>Increment</button>
                <button onClick={()=> dispatch({type: 'increment', value:5 })}>Increment by five</button>
                <button onClick={()=> dispatch({type: 'increment', value:7 })}>Increment by Seven</button>
                <button onClick={()=> dispatch({type: 'decrement', value:1 })}>Decrement</button>                
                <button onClick={()=> dispatch({type: 'decrement', value:5 })}>Decrement by five</button>
                <button onClick={()=> dispatch({type: 'decrement', value:7 })}>Decrement by Seven</button>
                <button onClick={()=> dispatch({ type: 'reset' })}>Reset</button>
            </div>
            
            <div>
                <p>Counter Two - Count 2: {count.value2}</p>
                <button onClick={()=> dispatch({type: 'increment2', value:1 })}>Increment</button>
                <button onClick={()=> dispatch({type: 'increment2', value:5 })}>Increment by five</button>
                <button onClick={()=> dispatch({type: 'increment2', value:7 })}>Increment by Seven</button>
                <button onClick={()=> dispatch({type: 'decrement2', value:1 })}>Decrement</button>                
                <button onClick={()=> dispatch({type: 'decrement2', value:5 })}>Decrement by five</button>
                <button onClick={()=> dispatch({type: 'decrement2', value:7 })}>Decrement by Seven</button>
                <button onClick={()=> dispatch({ type: 'reset' })}>Reset</button>
            </div>
        </div>
    )
}