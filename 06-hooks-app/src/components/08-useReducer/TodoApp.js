import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch(action);
    }

    const handleToogle = (todoId) => {
        dispatch({
            type: 'toogle',
            payload: todoId
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action);
        reset();
    }
    
    return (
        <div>
            <h1>ToDo App (<small>{ todos.length }</small>)</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                        {
                            todos.map((item, i) => (
                                <li
                                    key={item.id}
                                    className='list-group-item'
                                >
                                    <p
                                        className={`${item.done && 'complete' }`}
                                        onClick={ () => handleToogle(item.id) }
                                    >
                                        { i + 1 }. { item.desc }
                                    </p>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => {handleDelete(item.id)}}
                                    >
                                        Borrar
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='col-5'>
                    <h4>Agregar tarea</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name='description'
                            className='form-control'
                            placeholder='Aprender...'
                            autoComplete='off'
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            className='btn btn-outline-primary mt-1 btn-block'
                            type='submit'
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
