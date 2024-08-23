import React,{useState} from 'react'

import Form from './components/Form';
import Todolist from './components/TodoList';


function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <div className='header'>
        <h1>
          Todo-App
        </h1>
        
        <div><Form todos={todos} setTodos={setTodos}/></div>
        <div><Todolist todos={todos} setTodos={setTodos}/></div>
      </div>

    </div>
  );
}

export default App;