import React from 'react';
import Posts from './components/PostForm';
import HookCounter from './components/HookCounter';
//import UseEffectonClass from './components/UseEffectonClass';
//import UseEffectFunction from './components/UseEffectFunction';
import MouseMove from './components/MouseMove';
import FetchData from './components/FetchData';
import ComponentA from './components/ComponentA';
import ParentComp from './components/ParentComp';

export const UserContext = React.createContext()
export const ProfileContext = React.createContext()

function App() {  
 return (
   <div>       
     {/* <Posts /> */}  
      {/** <HookCounter /> */} 
     { /* <UseEffectFunction /> */ }  
     {/** <MouseMove /> */}  
     {/** <FetchData /> */}  
     <UserContext.Provider value={"John"} >
       <ProfileContext.Provider value={"something"} >
              <ComponentA />
       </ProfileContext.Provider>
     </UserContext.Provider>  
     <ParentComp />   
   </div>
 )
}

export default App;
