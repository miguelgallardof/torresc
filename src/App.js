import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import { Home, Services, Galery } from "./pages";
import "./App.css";

/* export default function App() { */
export const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<span>Loading...</span>}></Suspense>
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
};

export default App;
