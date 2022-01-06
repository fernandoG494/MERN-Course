import React, { useState, useEffect } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';s

const GifGrid = ({category}) => {
    // const [images, setImages] = useState([])
    const {loading, data} = useFetchGifs();
    console.log(data);
    console.log(loading);

    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // }, [category]);     // vacio se ejecuta una vez

    return (
        <>
            <h3> { category } </h3>
            {loading ? 'Cargando...' : 'Fin de la carga...'}
            {/* <div className='card-grid'>
                <ol>
                    {   
                        images.map(img => (
                            <GifGridItem
                                key={img.title}
                                {...img}
                            />
                        ))
                    }
                </ol>
            </div> */}
        </>
    )
}

export default GifGrid
