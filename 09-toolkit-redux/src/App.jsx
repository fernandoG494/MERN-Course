import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './store/slices/counter/counterSlice';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector(state => state.counter);

  return (
    <div className="App">
      <div>
        <p>count is: {counter}</p>
      </div>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          Increment by 2
        </button>
      </div>
    </div>
  )
}

export default App
