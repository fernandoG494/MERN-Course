import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import HookApp from './HookApp'
// import CounterApp from './components/01-useState/CounterApp';
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';


ReactDOM.render(
  // <HookApp />,
  // <CounterApp />,
  <CounterWithCustomHook />,
  document.getElementById('root')
);
