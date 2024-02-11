import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MatrixPage from "./pages/MatrixPage";

const App: React.FC = () => (
  <div className="wrapper">
    {/* <Header /> */}
    <div className="content">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matrix" element={<MatrixPage />} />
      </Routes>
    </div>
  </div>
);

export default App;
