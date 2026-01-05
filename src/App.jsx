import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'

import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Projects } from "./components/sections/Projects";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router basename="/">
      {/* Navbar stays outside Routes so it shows on every page */}
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* You can add /about or /education routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
