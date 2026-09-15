import { useState } from 'react'
import './App.css'
import './index.css'

import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { SortingAlgorithmVisualizer } from './components/projects/SortingAlgorithmVisualizer';
import { RhythmRacer } from './components/projects/RhythmRacer';
import { DeepLearningAssistant } from './components/projects/DeepLearningAssistant';
// ...

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/sorting-algorithm-visualizer" element={<SortingAlgorithmVisualizer />} />
          <Route path="/projects/rhythm-racer" element={<RhythmRacer />} />
          <Route path="/projects/deep-learning-circuit-assistant" element={<DeepLearningAssistant />} />  
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;