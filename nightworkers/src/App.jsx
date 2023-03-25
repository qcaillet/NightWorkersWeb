// import "./App.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./views/Home"));
// maj + alt + flechebas
const App = () => {
  return (
    <div className="App">
      {/* <Preloader load={load} /> */}
      {/* <div className="App" id={load ? "no-scroll" : "scroll"}></div> */}
      <Suspense fallback={<div>Chargement...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/about" element={<Home />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
