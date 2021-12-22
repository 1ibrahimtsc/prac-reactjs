import React, { useState } from 'react';
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react/cjs/react.production.min';

const HookCounter = () => {
    const [count, setCount] = useState(0);
    const [info, setInfo] = useState({name: "", id: ""}) // useState hook with object
    const [lists, setLists] = useState([])               //useState hook with array

    const generateList = ()=> {
        setLists(
            [...lists, {  id: lists.length, value:Math.random()   }] 
                  )
                            }

    const incrementTen = ()=> {
        for(let i = 0; i < 10; i++){
           // setCount(count + 1)  not working
            setCount(prevState => prevState + 1)
        }
    }

    return (
        <>
          <div>
            <h1>Value : {count} from hook counter</h1>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
            <button onClick={()=> incrementTen()} >Increment by incrementTen</button>
        </div>
        <div>
            <form>
                <input value={info.name} onChange={(e)=> setInfo({...info, name: e.target.value})} />
                <input value={info.id} onChange={(e)=> setInfo({...info, id: e.target.value})} />
            </form>
            <p>name: {info.name}</p>
            <p>id: {info.id}</p>
        </div>
        <div>
            <button onClick={generateList} >Generate List</button>
            <ul>
                {
                    lists.map(list => {
                        return <li key={list.id}>{list.value}</li>
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default HookCounter;
