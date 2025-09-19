import TodoForm from "../features/todo/TodoForm";
import TodoList from "../features/todo/TodoList";
import { useTodos } from "../hooks/useTodos";

export default function Home() {
  const { todos, loading, createTodo, removeTodo } = useTodos();

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoForm onAdd={(data) => createTodo(data)} />
      {loading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <TodoList todos={todos} onDelete={removeTodo} />
      )}
    </div>
  );
}
