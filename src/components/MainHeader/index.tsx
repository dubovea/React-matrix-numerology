import { Header } from "antd/es/layout/layout";
import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

const MainHeader: React.FC = () => {
  return (
    <Header
      style={{
        textAlign: "center",
        height: 100,
        padding: "1rem",
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        color: "black",
        background: "white",
      }}
    >
      {" "}
      <Link to={`/matrix`}>
        <Typography>Калькулятор</Typography>
      </Link>
    </Header>
  );
};

export default MainHeader;
