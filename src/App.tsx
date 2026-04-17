import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Systems from './pages/Systems';
import Laboratory from './pages/Laboratory';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Archive from './pages/Archive';

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#0a0a0a' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Systems />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/services" element={<Services />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
