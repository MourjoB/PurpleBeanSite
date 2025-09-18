// src/App.jsx
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductsLanding from './pages/ProductsLanding';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import './index.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsLanding searchTerm={searchTerm} />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/products" replace />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
