import React, { useState, useEffect } from 'react';

const UseEffectFunction = ()=> {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")


    useEffect(()=>{
        console.log("useEffect Run")
        document.title = `count ${count}`
    }, [count])

    return(
        <div>
            <h1> Conditionally run useEffect </h1>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <h2>Name is : {name}</h2>
            <h3>Count: {count}</h3>
            <button onClick={()=> setCount(count + 2)}>Increment</button>            
        </div>
    )
}

export default UseEffectFunction;