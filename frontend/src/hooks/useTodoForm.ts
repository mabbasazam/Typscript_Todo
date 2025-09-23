import { useState } from "react";
import type { Todo } from "types/todo.types";

export const useTodoForm = (todo: Todo, onUpdate: (id: number, data: Partial<Todo>) => void) => {
  const [isEditing, setIsEditing] = useState(false);

  const [editForm, setEditForm] = useState<Partial<Todo>>({
    title: todo.title,
    description: todo.description,
    projectName: todo.projectName,
    contact: todo.contact,
    email: todo.email,
    name: todo.name,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editForm.title?.trim()) {
      onUpdate(todo.id, editForm);
      setIsEditing(false);
    }
  };

  return { editForm, isEditing, setIsEditing, handleChange, handleSave };
};
