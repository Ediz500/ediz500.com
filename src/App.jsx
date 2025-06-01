import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <Router>
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      <main
        className={`transition-all duration-300 min-h-screen bg-gray-100 p-6 ${
          isExpanded ? "ml-64" : "ml-16"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
