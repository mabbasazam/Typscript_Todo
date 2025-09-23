import { useState } from "react";
import type { Todo } from "types/todo.types";
import InputField from "./InputField";

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
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (editForm.title?.trim()) {
      onUpdate(todo.id, editForm);
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition flex flex-col justify-between">
      {isEditing ? (
        <div className="space-y-2">
          <InputField
            label="Title"
            name="title"
            value={editForm.title ?? ""}
            onChange={handleChange}
            placeholder="Title (required)"
            required
          />
          <InputField
            label="Description"
            name="description"
            value={editForm.description ?? ""}
            onChange={handleChange}
            placeholder="Description"
            textarea
          />
          <InputField
            label="Project Name"
            name="projectName"
            value={editForm.projectName ?? ""}
            onChange={handleChange}
            placeholder="Project Name"
          />
          <InputField
            label="Contact"
            name="contact"
            type="number"
            value={editForm.contact ?? ""}
            onChange={handleChange}
            placeholder="Contact"
          />
          <InputField
            label="Email"
            type="email"
            name="email"
            value={editForm.email ?? ""}
            onChange={handleChange}
            placeholder="Email"
          />
          <InputField
            label="Name"
            name="name"
            value={editForm.name ?? ""}
            onChange={handleChange}
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
          <div>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {todo.title}
                </h3>
                {todo.projectName && (
                  <p className="text-sm text-indigo-600 font-medium">
                    {todo.projectName}
                  </p>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
              {todo.description && (
                <div className="p-3 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition">
                  <span className="block font-medium text-gray-800">
                    📝 Description
                  </span>
                  <p>{todo.description}</p>
                </div>
              )}
              {todo.contact && (
                <div className="p-3 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition">
                  <span className="block font-medium text-gray-800">
                    📞 Contact
                  </span>
                  <p>{todo.contact}</p>
                </div>
              )}
              {todo.email && (
                <div className="p-3 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition">
                  <span className="block font-medium text-gray-800">
                    📧 Email
                  </span>
                  <p>{todo.email}</p>
                </div>
              )}
              {todo.name && (
                <div className="p-3 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition">
                  <span className="block font-medium text-gray-800">
                    👤 Name
                  </span>
                  <p>{todo.name}</p>
                </div>
              )}
            </div>
          </div>

          {/* Buttons always at bottom */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-600 transition flex-1"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition flex-1"
            >
              🗑 Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
