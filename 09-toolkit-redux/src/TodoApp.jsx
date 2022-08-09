import React, { useState } from 'react';
import { useGetTodoQuery } from './store/apis/todosApi';

const TodoApp = () => {
    const [ todoId, setTodoId ] = useState(1);
    const { data: todo, isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        setTodoId(todoId + 1);
    };

    const prevTodo = () => {
        if(todoId === 1) return;
        setTodoId(todoId - 1);
    };

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>is Loading: {isLoading ? 'True' : 'False'}</h4>

            <pre>{ JSON.stringify(todo) }</pre>

            <button onClick={prevTodo}>
                Prev Todo
            </button>
            <button onClick={nextTodo}>
                Next Todo
            </button>

            {/* <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <strong>{ todo.complete ? 'Done' : 'Pending' }: </strong>
                        { todo.title }
                    </li>
                ))}
            </ul> */}
        </>
    );
};

export default TodoApp;