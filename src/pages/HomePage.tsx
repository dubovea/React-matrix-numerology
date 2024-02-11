import React from "react";
import mainImg from "../assets/images/main.jpg";
import { Layout } from "antd";
import MainHeader from "../components/MainHeader";

const HomePage: React.FC = () => (
  <div className="wrapper">
    <Layout>
      <MainHeader />
    </Layout>
    <img
      style={{
        backgroundImage: `url(${mainImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "99vw",
        height: "100vh",
      }}
    />
  </div>
);

export default HomePage;
