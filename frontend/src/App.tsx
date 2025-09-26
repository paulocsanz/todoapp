import React, { useState, useEffect } from 'react';
import './App.css';
import { Todo } from './types';
import { todoAPI, API_BASE_URL } from './api';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  console.log("API_URL", { API_BASE_URL })

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      setLoading(true);
      const fetchedTodos = await todoAPI.getAllTodos();
      setTodos(fetchedTodos);
      setError(null);
    } catch (err) {
      setError('Failed to load todos');
      console.error('Error loading todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTodo = async (text: string) => {
    try {
      const newTodo = await todoAPI.createTodo(text);
      setTodos([newTodo, ...todos]);
      setError(null);
    } catch (err) {
      setError('Failed to add todo');
      console.error('Error adding todo:', err);
    }
  };

  const handleToggleTodo = async (id: number, completed: boolean) => {
    try {
      const updatedTodo = await todoAPI.updateTodo(id, completed);
      setTodos(todos.map(todo =>
        todo.id === id ? updatedTodo : todo
      ));
      setError(null);
    } catch (err) {
      setError('Failed to update todo');
      console.error('Error updating todo:', err);
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await todoAPI.deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete todo');
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      </header>
      <main className="App-main">
        {error && <div className="error-message">{error}</div>}
        <TodoForm onAdd={handleAddTodo} />
        {loading ? (
          <p>Loading todos...</p>
        ) : (
          <TodoList
            todos={todos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        )}
      </main>
    </div>
  );
}

export default App;
