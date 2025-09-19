import { useEffect, useState } from "react";
  import type { Todo } from "types/todo.types";
import { getTodos, addTodo, deleteTodo } from "../api/todo.api";

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

  const createTodo = async (title: string) => {
    const newTodo = await addTodo(title);
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return { todos, loading, createTodo, removeTodo };
};
