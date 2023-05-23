import React from "react";
import Button from "./components/Button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.css";

function App() {
  return (
    <div>
      <h1>Data Insights Hub</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="/form" element={<h1>Form</h1>} />
          <Route path="/excel" element={<h1>Excel</h1>} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
