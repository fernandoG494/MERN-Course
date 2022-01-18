import { useState, useEffect, useRef } from 'react';

const useFetch = (url) => {
    const isMounted = useRef(false);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {        
        setState({data: null, loading: true, error: null});
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isMounted.current){
                    setTimeout(() => {
                        setState({
                            loading: false,
                            error: null,
                            data 
                        });
                    }, 4000);
                }else{
                    console.log('good reference')
                }
            })
            .catch(e => console.log(e))
    }, [url]);

    return state;
}

export default useFetch;