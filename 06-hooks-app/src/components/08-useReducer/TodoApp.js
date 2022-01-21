import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './styles.css';

const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender react',
    done: false
}]


const TodoApp = () => {
    const [todos] = useReducer(todoReducer, initialState);
    console.log(todos)
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
                                    <p className='text-center'>{ i + 1 }. { item.desc }</p>
                                    <button className='btn btn-danger'>
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

                    <form>
                        <input
                            type="text"
                            name='description'
                            className='form-control'
                            placeholder='Aprender...'
                            autoComplete='off'
                        />
                        <button
                            className='btn btn-outline-primary mt-1 btn-block'
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
