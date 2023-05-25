import React from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Excel from "./components/Excel";
import Visuals from "./components/Visuals";
import "./assets/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <h1>Data Insights Hub</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="/form" element={<Form />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="/visuals" element={<Visuals />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
