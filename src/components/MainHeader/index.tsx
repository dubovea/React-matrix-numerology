import { Header } from "antd/es/layout/layout";
import React from "react";
import { Flex, Typography } from "antd";
import { Link } from "react-router-dom";
import instagramIcon from "../../assets/instagram.svg";

const MainHeader: React.FC = () => {
  return (
    <Header className="h-24 bg-white color-black p-1">
      <Flex className="h-full pr-10" align="center" justify="end" gap={20}>
        <Flex className="flex-1 pl-10">
          <Link to={`/matrix`}>
            <Typography className="header__logo">GL</Typography>
          </Link>
        </Flex>
        <Link to={`/matrix`}>
          <Typography className="header__link">ГЛАВНАЯ</Typography>
        </Link>
        <Link to={`/matrix`}>
          <Typography className="header__link">ОБУЧЕНИЕ</Typography>
        </Link>
        <Link to={`/matrix`}>
          <Typography className="header__link">КУРСЫ</Typography>
        </Link>
        <Link to={`/matrix`}>
          <Typography className="header__link">КОНСУЛЬТАЦИЯ</Typography>
        </Link>
        <Link to={`/matrix`}>
          <Typography className="header__link">ПОДПИСКА</Typography>
        </Link>
        <Link to={`/matrix`}>
          <Typography className="header__link">ВЕБИНАРЫ</Typography>
        </Link>
        <Link to={`/matrix`}>
          <Typography className="header__link">КАЛЬКУЛЯТОР</Typography>
        </Link>
        <Link to={`/matrix`}>
          <Typography className="header__link">ЭКСПЕРТЫ</Typography>
        </Link>
        <img src={instagramIcon} alt="Insta Logo" />
      </Flex>
    </Header>
  );
};

export default MainHeader;
