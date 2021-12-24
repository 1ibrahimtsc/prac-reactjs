import React, {useState, useMemo} from 'react';

const Usememohook = () => {
    const [idOne, setIdOne] = useState(0)
    const [idTwo, setIdTwo] = useState(0)

    const incrementIdOne = () => {
        setIdOne(idOne + 1)
    }

    const incrementIdTwo = () => {
        setIdTwo(idTwo + 1)
    }

    const isEven = useMemo(() => {
        let n = 0;
        while(n < 2000000000) n++;
        return idOne % 2 === 0
    }, [idOne])

    return (
        <div>
            <div>
                <button onClick={() => incrementIdOne()} >Increment Id One - {idOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div>
                <button onClick={() => incrementIdTwo()} >Increment Id One - {idTwo}</button>
                
            </div>
        </div>
    )
}

export default Usememohook;