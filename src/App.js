import "./App.css";
import React from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <div>
      <Home />
    </div>
    // <Routes>
    //   <Route path="/" element={<Home />}></Route>
    //   <Route path="/about" element={<About />}></Route>
    // </Routes>
  );
}

export default App;
