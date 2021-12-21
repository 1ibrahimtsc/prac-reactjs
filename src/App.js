//import React, { useReducer } from 'react';
//import Count from './components/Counter';
//import CounterTwo from './components/CounterTwo';
//import CounterThree from './components/CounterThree';
//import ComponentA from './components/ComponentA';
//import ComponentB from './components/ComponentB';
import CompOne from './components/CompOne';
import { UserProvider } from './components/UserContext';


function App() {  
 return (
   <div>       
       <UserProvider value="John">
       <CompOne />
        </UserProvider>
   </div>
 )
}

export default App;
