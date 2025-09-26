export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  created_at: Date;
}

export interface CreateTodoRequest {
  text: string;
}

export interface UpdateTodoRequest {
  completed?: boolean;
}