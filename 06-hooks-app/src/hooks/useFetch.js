import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {        
        setState({data: null, loading: true, error: null});
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data 
                });
            })
            .catch(e => console.log(e))
    }, [url]);

    return state;
}

export default useFetch;