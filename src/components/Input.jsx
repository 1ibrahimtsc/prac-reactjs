import React, {useState, useRef, useEffect } from 'react';

const Input = () => {
    const [name, setName] = useState("")

    const inputRef = useRef(null)

    useEffect(()=> {
      inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} onChange={() => setName(inputRef.current.value)}
            type="text" />
            <p> Name is : {name}</p>
        </div>
    )
}

export default Input;