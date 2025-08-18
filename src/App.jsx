import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ClipLoader from "react-spinners/ClipLoader"; 
import "./styles.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            backgroundColor: "#000",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 100000,
          }}
        >
          <ClipLoader
            color="#4fa94d"
            loading={true}
            size={80}
            aria-label="loading-spinner"
          />
        </div>
      )}

      {!loading && (
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
          <Toaster position="top-right" />
        </Router>
      )}
    </div>
  );
}

export default App;
