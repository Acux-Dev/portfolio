import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./app.css";

function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
