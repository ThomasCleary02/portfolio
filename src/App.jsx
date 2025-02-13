import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div className="bg-backgroundLight min-h-screen flex flex-col">
      <Router>
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <Analytics />
    </div>
  );
}

export default App;
