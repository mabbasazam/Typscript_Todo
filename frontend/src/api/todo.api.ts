import axios from "axios";
import type { Todo } from "types/todo.types";

type TodoFormData = Omit<Todo, "id" | "createdAt" | "updatedAt">;

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
});

export const getTodos = async (): Promise<Todo[]> => {
  const res = await API.get("api/todos");
  return res.data;
};

export const addTodo = async (todoData: TodoFormData): Promise<Todo> => {
  console.log("TODO DATA===============", todoData);
  const res = await API.post("api/todos", todoData);
  return res.data;
};

export const updateTodo = async (
  id: number,
  data: Partial<Todo>
): Promise<Todo> => {
  const res = await API.put(`api/todos/${id}`, data);
  return res.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await API.delete(`api/todos/${id}`);
};
