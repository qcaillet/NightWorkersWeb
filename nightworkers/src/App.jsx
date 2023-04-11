import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navBar/NavBar";
import Particle from "./components/Particle";
import Validation from "./views/validation/Validation";
import Casino from "./views/Casino";
import RiskToEarn from "./views/RiskToEarn";

const Home = lazy(() => import("./views/home/Home"));
// maj + alt + flechebas
const App = () => {
  return (
    <div className="App">
      <Particle />
      <Suspense fallback={<div>Chargement...</div>}>
        <NavBar />
        {/* <Preloader load={load} /> */}
        {/* <div className="App" id={load ? "no-scroll" : "scroll"}></div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/RiskToEarn" element={<RiskToEarn />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
