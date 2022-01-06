import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3> { category } </h3>
            {loading && <p>Loading...</p>}
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
