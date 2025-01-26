import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="bg-backgroundLight min-h-screen">
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
