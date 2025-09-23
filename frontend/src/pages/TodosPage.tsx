import TodoList from "../features/todo/TodoList";
import { useTodos } from "../hooks/useTodos";

export default function TodosPage() {
  const { todos, loading, removeTodo, editTodo } = useTodos();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Your Todos
      </h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <TodoList todos={todos} onDelete={removeTodo} onUpdate={editTodo} />
      )}
    </div>
  );
}
