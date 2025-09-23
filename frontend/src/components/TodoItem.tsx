import type { Todo } from "types/todo.types";
import InputField from "./InputField";
import Button from "./Button";
import { useTodoForm } from "../hooks/useTodoForm";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: Partial<Todo>) => void;
}

export default function TodoItem({ todo, onDelete, onUpdate }: Props) {
  const { handleSave, handleChange, isEditing, editForm, setIsEditing } =
    useTodoForm(todo, onUpdate);
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
            <Button variant="success" onClick={handleSave}>
              Update
            </Button>
            <Button variant="secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </Button>
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
            <Button
              variant="warning"
              fullWidth
              onClick={() => setIsEditing(true)}
            >
              ✏️ Edit
            </Button>
            <Button
              variant="danger"
              fullWidth
              onClick={() => onDelete(todo.id)}
            >
              🗑 Delete
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
