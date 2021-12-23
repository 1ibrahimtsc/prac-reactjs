import React, { useState, useEffect } from 'react';

const UseEffectFunction = ()=> {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        document.title = `count ${count}`
    })

    return(
        <div>
            <h1> Count : {count} from hook counter </h1>
            <button onClick={()=> setCount(count + 1)  } >Increment</button>
        </div>
    )
}

export default UseEffectFunction;