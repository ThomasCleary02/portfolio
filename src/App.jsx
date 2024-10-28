import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ColorAnalyzerPage from './pages/ColorAnalyzerPage';
import Background from './components/Background';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useRef } from 'react'

function App() {
  const aboutMeRef = useRef(null);

  return (
    <Router>
      <Background>
        <div className="min-h-screen">
          <Navigation />
          <Hero aboutMeRef={aboutMeRef} />
          <Routes>
            <Route path="/" element={<HomePage aboutMeRef={aboutMeRef} />} />
            <Route path="/color-analyzer" element={<ColorAnalyzerPage />} />
          </Routes>
          <Footer />
        </div>
      </Background>
    </Router>
  );
}

export default App;