import React from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Excel from "./components/Excel";
import "./assets/styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  // const [data, setData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/api/getData")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  // const [data, setData] = useState([{}]);

  // useEffect(() => {
  //   fetch("/api/getData")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div>
      <h1>Data Insights Hub</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="/form" element={<Form />} />
          <Route path="/excel" element={<Excel />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
