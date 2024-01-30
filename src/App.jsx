import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Finances from "./components/finances";
import LogIn from "./login/login";
import SignIn from "./login/signin";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <li>
            <Link to="/" className="Title">
              BudgetBrain
            </Link>
          </li>
          <ul>
            <li>
              <Link to="/about" className="Links">
                Our Tools{" "}
              </Link>
            </li>
            <li>
              <Link to="/finances" className="Links">
                Finances{" "}
              </Link>
            </li>
            <li>
              <Link to="/login" className="Links">
                Logout{" "}
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
