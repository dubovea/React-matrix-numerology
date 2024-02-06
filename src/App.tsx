import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App: React.FC = () => (
  <div className="wrapper">
    {/* <Header /> */}
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </div>
);

export default App;
