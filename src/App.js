import Posts from './components/PostForm';
import HookCounter from './components/HookCounter';
//import UseEffectonClass from './components/UseEffectonClass';
//import UseEffectFunction from './components/UseEffectFunction';
import MouseMove from './components/MouseMove';
import FetchData from './components/FetchData';

function App() {  
 return (
   <div>       
       <Posts />
       <HookCounter />
     { /* <UseEffectFunction /> */ }  
       <MouseMove />
       <FetchData />
   </div>
 )
}

export default App;
