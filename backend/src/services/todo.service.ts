import { AppDataSource } from "../config/db";
import { Todo } from "../models/todo.entity";

const todoRepo = AppDataSource.getRepository(Todo);

export const getAllTodos = async () => {
  return await todoRepo.find({ order: { createdAt: "DESC" } });
};

export const getTodoById = async (id: number) => {
  return await todoRepo.findOneBy({ id });
};

export const createTodo = async (payload: Partial<Todo>) => {
  const todo = todoRepo.create(payload);
  return await todoRepo.save(todo);
};

export const updateTodo = async (id: number, payload: Partial<Todo>) => {
  await todoRepo.update(id, payload);
  return await getTodoById(id);
};

export const deleteTodo = async (id: number) => {
  return await todoRepo.delete(id);
};
