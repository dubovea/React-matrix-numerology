import React from "react";
import { Layout } from "antd";
import MainHeader from "../components/MainHeader";
import MainPage from "../components/templates/MainPage/MainPage";

const HomePage: React.FC = () => (
  <div className="wrapper">
    <Layout>
      <MainHeader />
    </Layout>
    <MainPage />
  </div>
);

export default HomePage;
