import TodoForm from "../features/todo/TodoForm";
import { useTodos } from "../hooks/useTodos";

export default function Home() {
  const { createTodo } = useTodos();

  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      <TodoForm onAdd={(data) => createTodo(data)} />
      <p className="mt-4 text-gray-600">
        👉 Check your <span className="font-semibold">Todos</span> on the
        <span className="text-blue-500"> Todos Page</span>.
      </p>
    </div>
  );
}
