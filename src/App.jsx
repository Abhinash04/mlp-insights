import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ClipLoader from "react-spinners/ClipLoader";
import "./styles.css";
import ShopperModal from "./components/ShopperModal";

function App() {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      const timer = setTimeout(() => setLoading(false), 2500);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <>
    <div>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            backgroundColor: "#fff",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 100000,
          }}
        >
          <ClipLoader
            color="#2563eb"
            loading={true}
            size={60}
            aria-label="loading-spinner"
          />
        </div>
      )}
      <ShopperModal isOpen={isModalOpen} onClose={closeModal} />

      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Toaster position="top-right" />
      </Router>
    </div>
    </>
  );
}

export default App;