import React, { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        title,
        description,
        id: Date.now(),
      },
    ]);
    setTitle('');
    setDescription('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    const updatedTitle = prompt('Enter updated title:');
    const updatedDescription = prompt('Enter updated description:');
    if (updatedTitle === '' || updatedDescription === '') {
      alert('Both title and description are required.');
      return;
    }
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, title: updatedTitle, description: updatedDescription }
          : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          className="input-field"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="                                  Title"
        />
        <input
          className="input-field"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="                             Description"
        />
        <button className="add-btn" type="submit">
          Add Todo
        </button>
      </form>

      <div className="todo-list">
        {todos.map((item) => (
          <div key={item.id} className="todo-item">
            <div className="todo-content">
            <div className="todo-actions">
              <button className="btn" onClick={() => editTodo(item.id)}>
                <i className="fas fa-edit"></i>
              </button>
              <button className="btn" onClick={() => deleteTodo(item.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Description:</strong> {item.description}</p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
