import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Charisma from "./pages/charisma/Charisma";
import Actress from "./pages/actress/Actress";
import Arabian from "./pages/arabian/Arabian";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/charisma" element={<Charisma />} />
        <Route path="/arabian" element={<Arabian />} />
        <Route path="/about" element={<About />} />
        <Route path="/acting" element={<Actress />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
