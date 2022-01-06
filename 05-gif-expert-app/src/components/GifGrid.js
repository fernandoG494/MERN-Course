import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
        console.log(images);
    }, []);     // vacio se ejecuta una vez

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=ES4gF5GXZ2t7C68Ufle3g78y8RymtV06&q=hacker&limit=10';
        const respuesta = await fetch(url);
        const { data } = await respuesta.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });
        setImages(gifs);
    }

    return (
        <div>
            <h3> { category } </h3>
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
    )
}

export default GifGrid
