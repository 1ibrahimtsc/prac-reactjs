import React, { useReducer } from 'react';
import Count from './components/Counter';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';

const initialState = 0;
const reducer = (state, action) => {
switch(action){
    case 'increment':
        return state + 1;
    case 'decrement':
        return state - 1;
    default :
          return state;
          }
  }

  export const CountContext = React.createContext()
function App() {  

  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    // <Count/>
    // <CounterTwo />
    // <CounterThree />
    <CountContext.Provider value={  { countValue: count, countDispatch: dispatch } } >
          <div className="App">
              <ComponentA />
              <ComponentB />
          </div>
    </CountContext.Provider>

  );
}

export default App;
