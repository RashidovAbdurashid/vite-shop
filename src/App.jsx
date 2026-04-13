import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/User";
import Products from "./pages/Product";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
