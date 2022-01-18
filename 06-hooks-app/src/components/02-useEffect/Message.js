import React, { useState, useEffect } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y: 0});
    const {x, y} = coords;

    useEffect(() => {
        // console.log('componente montado');
        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y};
            // console.log(coords);
            setCoords(coords);
        }

        window.addEventListener('mousemove', mouseMove);
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h2>Eres genial</h2>
            <p>
                x: { x }, y: { y }
            </p>
        </div>
    )
}
