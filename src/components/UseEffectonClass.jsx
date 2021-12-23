import { render } from '@testing-library/react';
import React, { Component } from 'react';

class UseEffectonClass extends Component {
    constructor(props){
       super(props)

       this.state = {count: 0}
    }

    componentDidMount(){
        document.title = `count ${this.state.count}` 
     }
     
     componentDidUpdate() {
         document.title = `count ${this.state.count}`
     }
     
     render(){
         return(
             <div>
                 <h1>Count on UseEffectclass : {this.state.count}</h1>
                 <button onClick={()=> this.setState({count:this.state.count + 1})} >Increment</button>
             </div>
         )
     }
}



export default UseEffectonClass;