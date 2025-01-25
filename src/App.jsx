import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';


function App() {

  return (
    <Router>
      <HomePage />
      <Footer />
    </Router>
  );
}

export default App;