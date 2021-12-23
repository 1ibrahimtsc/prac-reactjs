import React, {useState, useEffect } from 'react';

const MouseMove = ()=> {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0)

    const LogMouseMove = (e) => {
      console.log("log mouse move run")
       
      setX(e.clientX)
      setY(e.clientY)      
    }

    useEffect(() => {
        console.log("useEffect run")        
        window.addEventListener('mousemove', LogMouseMove)
    }, [])

    return (
        <div>
            <h3> X - {x} Y - {y}</h3>
        </div>
    )
}

export default MouseMove;