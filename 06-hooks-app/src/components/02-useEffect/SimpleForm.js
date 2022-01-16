import React, { useEffect, useState } from 'react';

import './effects.css';

const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect(() => {
        console.log('hey!')
    }, []);

    useEffect(() => {
        console.log('form state change')
    }, [formState]);

    useEffect(() => {
        console.log('email change')
    }, [email]);

    const handleInputChange = ({target}) => {
        console.log(target.name);
        console.log(target.value);
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }
    
    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input
                    type='type'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>
                <input
                    type='type'
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
        </>
    )
}

export default SimpleForm;
