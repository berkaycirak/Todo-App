function Todo({ text, id, setTodos, todos, completed }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${completed && 'completed'}`}>{text}</li>
      <button onClick={completeHandler} className='complete-btn'>
        check
      </button>
      <button onClick={deleteHandler} className='delete-btn'>
        delete
      </button>
    </div>
  );
}

export default Todo;
