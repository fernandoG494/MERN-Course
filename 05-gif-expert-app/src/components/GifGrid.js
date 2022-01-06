import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category).then(imgs => setImages(imgs));
    }, [category]);     // vacio se ejecuta una vez

    return (
        <>
            <h3> { category } </h3>
            <div className='card-grid'>
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
            </div>
        </>
    )
}

export default GifGrid
