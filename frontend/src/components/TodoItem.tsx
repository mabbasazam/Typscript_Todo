import type { Todo } from "types/todo.types";

interface Props {
  todo: Todo;
  onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onDelete }: Props) {
  const displayTitle =
    typeof todo.title === "string" ? todo.title : JSON.stringify(todo.title);
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-5 hover:shadow-lg transition">
      {/* Header */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{displayTitle}</h3>
          {todo.projectName && (
            <p className="text-sm text-blue-600">{todo.projectName}</p>
          )}
        </div>
        <button
          onClick={() => onDelete(todo.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>

      {/* Details */}
      <div className="space-y-2 text-gray-700 text-sm">
        {todo.description && (
          <p>
            <span className="font-medium">📝 Description:</span> {todo.description}
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
    </div>
  );
}
