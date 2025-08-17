import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Loader from "./components/Loader"
import "./styles.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="transition-opacity duration-1000 opacity-100">
        <Loader />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Toaster position="top-right" autoClose={3000} />
    </Router>
  );
}

export default App;