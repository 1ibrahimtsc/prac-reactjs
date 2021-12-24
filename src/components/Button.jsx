import React from 'react';

const Button = ( { text, increment } ) => {
console.log(`Rendering ${text}`)
return (
        <div>
            <button onClick={ () => increment() }  >Increment {text} </button>
        </div>
       )
}

export default React.memo(Button);
