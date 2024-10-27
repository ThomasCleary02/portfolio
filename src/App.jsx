import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import ColorAnalyzerPage from './pages/ColorAnalyzerPage';
import Background from './components/Background';
import Hero from './components/Hero'

function App() {
  return (
    <Router>
      <Background>
        <div className="min-h-screen">
          <Navigation />
          <Hero />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/color-analyzer" element={<ColorAnalyzerPage />} />
          </Routes>
        </div>
      </Background>
    </Router>
  );
}

export default App;