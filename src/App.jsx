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

   useEffect(() => {
    // Ensure viewport meta tag is set correctly
    let viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
    } else {
      viewport = document.createElement('meta');
      viewport.name = "viewport";
      viewport.content = "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes";
      document.getElementsByTagName('head')[0].appendChild(viewport);
    }

    // Apply body styles to prevent overflow
    document.documentElement.style.overflowX = 'hidden';
    document.documentElement.style.width = '100%';
    document.documentElement.style.maxWidth = '100vw';
    document.body.style.overflowX = 'hidden';
    document.body.style.width = '100%';
    document.body.style.maxWidth = '100vw';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return () => {
      // Cleanup on unmount (optional)
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
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