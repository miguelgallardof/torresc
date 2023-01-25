import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, Services, Galery } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/galery" element={<Galery />} />
        </Routes>
        <Footer />
      </section>
    </div>
  );
}

export default App;
