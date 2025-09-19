import { Request, Response } from "express";
import * as todoService from "../services/todo.service";

// Get all todos
export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch todos" });
  }
};

// Get single todo
export const getTodo = async (req: Request, res: Response) => {
  try {
    const todo = await todoService.getTodoById(Number(req.params.id));
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch todo" });
  }
};

// Create todo
export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, projectName, contact, email, name } = req.body;

    if (!title || typeof title !== "string") {
      return res.status(400).json({ message: "Title is required" });
    }

    const todo = await todoService.createTodo({
      title,
      description,
      projectName,
      contact,
      email,
      name,
      completed: false,
    });

    res.status(201).json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create todo" });
  }
};

// Update todo
export const updateTodo = async (req: Request, res: Response) => {
  try {
    const updated = await todoService.updateTodo(Number(req.params.id), req.body);
    if (!updated) return res.status(404).json({ message: "Todo not found" });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Failed to update todo" });
  }
};

// Delete todo
export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const result = await todoService.deleteTodo(Number(req.params.id));
    if (result.affected === 0) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete todo" });
  }
};
