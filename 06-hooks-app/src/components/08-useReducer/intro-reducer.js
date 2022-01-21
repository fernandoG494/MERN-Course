const initialState = [{
    id: 1,
    todo: 'comprar leche',
    done: false
}];

const newTodo = {
    id: 2,
    todo: 'comprar pan',
    done: false
}

const todoReducer = (state = initialState, action) => {
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const addTodo = {
    type: 'agregar',
    payload: newTodo
} // action agregar

todos = todoReducer(todos, addTodo);


console.log(todos);