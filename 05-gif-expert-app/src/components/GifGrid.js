import React, { useEffect } from 'react';

const GifGrid = ({category}) => {

    useEffect(() => {
        getGifs();
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
    }

    return (
        <div>
            <h1> { category } </h1>
        </div>
    )
}

export default GifGrid
