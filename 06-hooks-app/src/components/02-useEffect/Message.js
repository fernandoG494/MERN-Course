import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('componente montado');
        return () => {
            console.log('componente desmontado');
        }
    }, [])

    return (
        <div>
            <h2>Eres genial</h2>
        </div>
    )
}
