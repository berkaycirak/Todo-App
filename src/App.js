import Form from './components/Form';
import TodoList from './components/TodoList';

import { useState, useEffect } from 'react';

function App() {
  // States
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Use Effect
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  return (
    <div className='App'>
      <header>
        <h1>Welcome to TODO App</h1>
      </header>
      <Form
        setInput={setInput}
        input={input}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
