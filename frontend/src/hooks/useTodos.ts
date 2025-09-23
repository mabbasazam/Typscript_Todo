import { useEffect, useState } from "react";
import type { Todo } from "types/todo.types";
import { getTodos, addTodo, deleteTodo, updateTodo } from "../api/todo.api";

export type TodoFormData = Omit<Todo, "id" | "createdAt" | "updatedAt">;

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    setLoading(true);
    const data = await getTodos();
    setTodos(data);
    setLoading(false);
  };

 const createTodo = async (todoData: TodoFormData) => {
  const newTodo = await addTodo(todoData);
  setTodos((prev) => [...prev, newTodo]);
};

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const editTodo = async (id: number, data: Partial<Todo>) => {
    const updated = await updateTodo(id, data);
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...updated } : t))
    );
  };

  return { todos, loading, createTodo, removeTodo, editTodo };
};
