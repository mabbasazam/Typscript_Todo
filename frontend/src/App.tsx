import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TodosPage from "./pages/TodosPage";
import Navbar from "./components/Navbar"; // ✅ Imported Navbar

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
