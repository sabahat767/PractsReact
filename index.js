import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Todolist from './components/ToDoList'
import OnOff from './components/OnOff'
import UseState from './components/Usestate'
import FunctionProps from './components/functionProps'
import TaskforuseState from './components/TaskforuseState'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Todolist/> */}
    {/* <OnOff /> */}
    {/* <UseState /> */}
{/* <FunctionProps name='abc'/> */}
<TaskforuseState/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
