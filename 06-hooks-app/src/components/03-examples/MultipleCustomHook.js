import React from 'react';
import useFetch from '../../hooks/useFetch';

import '../02-useEffect/effects.css';

const MultipleCustomHook = () => {
    const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
    console.log(state);

    return (
        <div>
            <h1>Multiple custom hooks!!!</h1>
        </div>
    )
}

export default MultipleCustomHook;