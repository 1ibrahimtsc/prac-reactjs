import Posts from './components/PostForm';
import HookCounter from './components/HookCounter';
//import UseEffectonClass from './components/UseEffectonClass';
//import UseEffectFunction from './components/UseEffectFunction';
import MouseMove from './components/MouseMove';

function App() {  
 return (
   <div>       
       <Posts />
       <HookCounter />
     { /* <UseEffectFunction /> */ }  
       <MouseMove />
   </div>
 )
}

export default App;
