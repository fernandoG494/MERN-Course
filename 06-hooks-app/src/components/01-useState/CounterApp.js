import React, { useState } from 'react';

import './Counter.css';

const CounterApp = () => {

    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40
    });

    const { counter1, counter2 } = state;

    // console.log(counter);

    return (
        <>
            <h1>Counter 1 { counter1 }</h1>
            <h1>Counter 2 { counter2 }</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={() => {
                    setCounter({
                        ...state,
                        counter1: counter1 + 1,
                        counter2: counter2
                    });
                }}
            >
                +1
            </button>  
        </>
    )
}

export default CounterApp
