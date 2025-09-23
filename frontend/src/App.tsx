import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import TodosPage from "./pages/TodosPage";

function Navbar() {
  const location = useLocation();

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-blue-500 text-white shadow-md"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }`;

  return (
    <nav className="flex justify-center gap-4 mb-6 bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-3">
      <Link to="/" className={linkClasses("/")}>
        🏠 Home
      </Link>
      <Link to="/todos" className={linkClasses("/todos")}>
        ✅ Todos
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <Router>
      <div className="max-w-7xl mx-auto p-4">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodosPage />} />
        </Routes>
      </div>
    </Router>
  );
}
