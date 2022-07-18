import React from 'react'
import AppRouter from './router/AppRouter'
import Apptheme from './theme/Apptheme'

const JournalApp = () => {
    return (
        <Apptheme>
            <AppRouter /> 
        </Apptheme>
    )
}

export default JournalApp