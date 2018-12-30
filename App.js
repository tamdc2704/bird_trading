import React, {useState} from 'react'

const App = ({count, onInc, onDec}) => {
    return(
        <div>
            <div>{count}</div>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
        </div>
    )
}

export default App