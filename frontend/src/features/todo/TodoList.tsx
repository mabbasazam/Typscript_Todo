import TodoItem from "../../components/TodoItem";
import type { Todo } from "types/todo.types";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onUpdate: (id: number, data: Partial<Todo>) => void;
}

export default function TodoList({ todos, onDelete, onUpdate }: Props) {
  return (
    <div className="mt-4 max-h-[600px] p-2">
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No todos found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      )}
    </div>
  );
}
