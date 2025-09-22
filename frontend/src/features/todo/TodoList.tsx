import TodoItem from "../../components/TodoItem";
import type { Todo } from "types/todo.types";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: Partial<Todo>) => void; // ✅ new
}

export default function TodoList({ todos, onDelete, onUpdate }: Props) {
  return (
    <div className="space-y-2 mt-4">
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos found.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
}
