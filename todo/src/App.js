import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

// ... rest of your code


const App = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const [newTodo, setNewTodo] = useState({
    title: '',
    status: 'Not Started',
    category: '',
  });

  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleCategoryFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredTodos = selectedCategory === 'All'
    ? todos
    : todos.filter(todo => todo.category === selectedCategory);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleAddTodo = () => {
    if (newTodo.title && newTodo.category) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { ...newTodo, id: Date.now() },
      ]);
      setNewTodo({ title: '', status: 'Not Started', category: '' });
    }
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>TODO List</h1>
      <div className="todo-form">
        <input
          type="text"
          name="title"
          value={newTodo.title}
          onChange={handleInputChange}
          placeholder="Enter TODO title"
        />
        <select
          name="status"
          value={newTodo.status}
          onChange={handleInputChange}
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <input
          type="text"
          name="category"
          value={newTodo.category}
          onChange={handleInputChange}
          placeholder="Enter TODO category"
        />
        <button onClick={handleAddTodo}>Add TODO</button>
      </div>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span>Title: {todo.title}</span>
            <span>Status: {todo.status}</span>
            <span>Category: {todo.category}</span>
            <button onClick={() => handleUpdateTodo(todo.id, { ...todo, status: 'Completed' })}>Complete</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default App;
