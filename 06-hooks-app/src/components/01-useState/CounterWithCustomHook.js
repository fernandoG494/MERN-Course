import React from 'react'
import useCounter from '../../hooks/useCounter';

import './Counter.css';

const CounterWithCustomHook = () => {
    const { state, increment, reset, decrement }  = useCounter(10);

    return (
        <>
            <h1>Counter with hook: { state }</h1>
            <hr />

            <button onClick={() => increment(1)} className='btn'>+1</button>
            <button onClick={reset} className='btn'>Reset</button>
            <button onClick={() => decrement(1)} className='btn'>-1</button>
        </>
    )
}

export default CounterWithCustomHook;