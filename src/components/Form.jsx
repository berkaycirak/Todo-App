import { useState } from 'react';

function Form({ input, setInput, setTodos, setStatus }) {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTodos((prev) => [
      ...prev,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <div className='todo'>
        <input
          type='text'
          className='todo-input'
          onChange={handleChange}
          value={input}
        />
        <button className='todo-button' type='submit' onClick={handleClick}>
          Submit
        </button>
      </div>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
