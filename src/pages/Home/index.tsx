import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "../../components/Layouts/AppLayout";

const Home: React.FC = () => (
  <div className="wrapper">
    {/* <Header /> */}
    <div className="content">
      <Routes>А
        <Route path="/" element={<AppLayout />} />
      </Routes>
    </div>
  </div>
);

export default Home;
