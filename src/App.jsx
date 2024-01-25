import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Finances from "./components/finances";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="Title">
                BudgetBrain
              </Link>
            </li>
            <li>
              <Link to="/about">Our Tools </Link>
            </li>
            <li>
              <Link to="/finances">Sign Up </Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/finances" element={<Finances />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
