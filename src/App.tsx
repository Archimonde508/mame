import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ModelPage from "./pages/model/ModelPage";
import ActressPage from "./pages/actress/ActressPage";
import OrientalPage from "./pages/oriental/OrientalPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/model" element={<ModelPage />} />
        <Route path="/oriental" element={<OrientalPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/actress" element={<ActressPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
