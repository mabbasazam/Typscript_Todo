import TodoItem from "../../components/TodoItem";
import type { Todo } from "types/todo.types";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

export default function TodoList({ todos, onDelete }: Props) {
  return (
    <div className="space-y-2 mt-4">
      {todos.length === 0 ? (
        <p className="text-gray-500">No todos found.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}