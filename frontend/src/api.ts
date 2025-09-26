import axios from 'axios';
import { Todo } from './types';

export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const todoAPI = {
  getAllTodos: async (): Promise<Todo[]> => {
    const response = await api.get('/api/todos');
    return response.data;
  },

  createTodo: async (text: string): Promise<Todo> => {
    const response = await api.post('/api/todos', { text });
    return response.data;
  },

  updateTodo: async (id: number, completed: boolean): Promise<Todo> => {
    const response = await api.put(`/api/todos/${id}`, { completed });
    return response.data;
  },

  deleteTodo: async (id: number): Promise<void> => {
    await api.delete(`/api/todos/${id}`);
  },
};
