import { useState } from "react";
import type { Todo } from "types/todo.types";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: Partial<Todo>) => void;
}

export default function TodoItem({ todo, onDelete, onUpdate }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<Todo>>({
    title: todo.title,
    description: todo.description,
    projectName: todo.projectName,
    contact: todo.contact,
    email: todo.email,
    name: todo.name,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editForm.title?.trim()) {
      onUpdate(todo.id, editForm);
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition">
      {isEditing ? (
        <div className="space-y-2">
          <input
            type="text"
            name="title"
            value={editForm.title ?? ""}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            placeholder="Title"
          />
          <input
            type="text"
            name="description"
            value={editForm.description ?? ""}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            placeholder="Description"
          /><input
            type="text"
            name="projectName"
            value={editForm.projectName ?? ""}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            placeholder="Project Name"
          /><input
            type="text"
            name="contact"
            value={editForm.contact ?? ""}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            placeholder="Contact"
          /><input
            type="text"
            name="email"
            value={editForm.email ?? ""}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            placeholder="Email"
          />
          <input
            type="text"
            name="name"
            value={editForm.name ?? ""}
            onChange={handleChange}
            className="border p-2 rounded-md w-full"
            placeholder="Name"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
            >
              Update
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-800">{todo.title}</h3>
              {todo.projectName && (
                <p className="text-sm text-blue-600">{todo.projectName}</p>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(todo.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2 text-gray-700 text-sm">
            {todo.description && (
              <p>
                <span className="font-medium">📝 Description:</span>{" "}
                {todo.description}
              </p>
            )}
            {todo.contact && (
              <p>
                <span className="font-medium">📞 Contact:</span> {todo.contact}
              </p>
            )}
            {todo.email && (
              <p>
                <span className="font-medium">📧 Email:</span> {todo.email}
              </p>
            )}
            {todo.name && (
              <p>
                <span className="font-medium">👤 Name:</span> {todo.name}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
}
