import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './index.css'
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Experience from "./pages/Experience";
import Achievement from "./pages/Achievements";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";

function App() {
  return (
    
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experience />} />
          <Route path="/achievements" element={<Achievement />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
