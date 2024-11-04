import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Footer from './components/footer/Footer';
import Charisma from './pages/charisma/Charisma';
import Actress from './pages/actress/actress';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charisma" element={<Charisma />} />
        <Route path="/about" element={<About />} />
        <Route path="/actress" element={<Actress />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App
