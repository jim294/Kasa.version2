import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import House from "./pages/House";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* des routes ont été ajouté VS projet uniquement pour le fonctionnement avec le plugging GitHub pages */}
        <Route path="jim294.github.io/Kasa" element={<Home />} />
        <Route path="/kasa" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/house/:id" element={<House />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
