import React from "react";
import { Link, Route, Routes, BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div className="app">
      <h1> Wellcome to our Website</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;