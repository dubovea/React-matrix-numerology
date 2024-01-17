import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Matrix from "./components/Matrix";

const App: React.FC = () => (
  <div className="wrapper">
    {/* <Header /> */}
    <div className="content">
      <Routes>
        <Route path="/matrix" element={<Matrix />} />
      </Routes>
    </div>
  </div>
);

export default App;
