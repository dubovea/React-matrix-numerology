import React from "react";
import { Layout, Typography, Flex } from "antd";
import CircleText from "../CircleText";
import bracketImg from "../../assets/images/bracket.png";
import { matrixSelector } from "../../redux/matrix/selectors";
import { useSelector } from "react-redux";
const { Sider, Content } = Layout;
const { Title } = Typography;

const TextBlock: React.FC = () => {
  const { infoData } = useSelector(matrixSelector);
  return (
    <Layout style={{ width: "500px" }}>
      <Sider
        width="60%"
        style={{
          textAlign: "left",
        }}
      >
        <Title style={{ color: "white", fontWeight: "bold" }} level={5}>
          Поиск себя:
        </Title>
        <Typography
          style={{
            color: "white",
            fontSize: 12,
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          Соединение мужского и женского. Выстраивание взаимоотношений.
          Способности, навыки, умения.
        </Typography>
        <Flex gap="middle">
          <Flex gap="middle" justify="space-around" vertical>
            <Typography style={{ color: "white" }}>Небо:</Typography>
            <Typography style={{ color: "white" }}>Земля:</Typography>{" "}
          </Flex>
          <Flex gap="middle" justify="space-between" vertical>
            <CircleText value={infoData.pointSky} />
            <CircleText value={infoData.pointEarth} />
          </Flex>
          <Flex gap="middle" justify="space-around" vertical>
            <img width="20" height="75" src={bracketImg} />
          </Flex>
          <Flex gap="middle" justify="space-around" vertical>
            <CircleText value={infoData.pointSkyEarth} />
          </Flex>
        </Flex>
        <Title style={{ color: "white", fontWeight: "bold" }} level={5}>
          Духовная гармония:
        </Title>
        <Typography
          style={{
            color: "white",
            fontSize: 12,
            lineHeight: 1,
            marginBottom: "1.5rem",
          }}
        >
          Духовный зачет. Кто я для бога? Где божественное во мне?
        </Typography>
        <Flex gap="middle" justify="center" style={{ marginBottom: "1rem" }}>
          <CircleText value={infoData.pointSpirit} />
        </Flex>
        <Flex vertical>
          <Flex>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Дата рождения:
            </Typography>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
              }}
            >
              {infoData.dateBirth}
            </Typography>
          </Flex>
          <Flex>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Возраст:
            </Typography>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
              }}
            >
              {infoData.age}
            </Typography>
          </Flex>
          <Flex>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              День недели:
            </Typography>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
              }}
            >
              {infoData.dayOfWeek}
            </Typography>
          </Flex>
          <Flex>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Троичный код мужского рода:
            </Typography>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
              }}
            >
              {infoData.manCode}
            </Typography>
          </Flex>
          <Flex>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Троичный код женского рода:
            </Typography>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
              }}
            >
              {infoData.womanCode}
            </Typography>
          </Flex>
          <Flex>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Сила рода:
            </Typography>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
              }}
            >
              {infoData.strengthFamily}
            </Typography>
          </Flex>
          <Flex>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
                fontWeight: "bold",
                marginRight: "0.5rem",
              }}
            >
              Код внутренней силы:
            </Typography>
            <Typography
              style={{
                color: "white",
                lineHeight: 1,
              }}
            >
              {infoData.codeStrength}
            </Typography>
          </Flex>
        </Flex>
      </Sider>
      <Content
        style={{
          textAlign: "left",
          backgroundColor: "#001529",
        }}
      >
        <Title style={{ color: "white", fontWeight: "bold" }} level={5}>
          Социализация:
        </Title>
        <Typography
          style={{
            color: "white",
            fontSize: 12,
            lineHeight: 1,
            marginBottom: "1rem",
          }}
        >
          Социальная и родовая системы. Результаты и признание в социуме.
        </Typography>
        <Flex gap="middle">
          <Flex gap="middle" justify="space-around" vertical>
            <Typography style={{ color: "white" }}>М:</Typography>
            <Typography style={{ color: "white" }}>Ж:</Typography>{" "}
          </Flex>
          <Flex gap="middle" justify="space-between" vertical>
            <CircleText value={infoData.pointMan} />
            <CircleText value={infoData.pointWoman} />
          </Flex>
          <Flex gap="middle" justify="space-around" vertical>
            <img width="20" height="75" src={bracketImg} />
          </Flex>
          <Flex gap="middle" justify="space-around" vertical>
            <CircleText value={infoData.pointManWoman} />
          </Flex>
        </Flex>
        <Title style={{ color: "white", fontWeight: "bold" }} level={5}>
          Планетарное:
        </Title>
        <Typography
          style={{
            color: "white",
            fontSize: 12,
            lineHeight: 1,
            marginBottom: "1.5rem",
          }}
        >
          Планетарное предназначение человека.
        </Typography>
        <Flex gap="middle" justify="center">
          <CircleText value={infoData.pointPlanet} />
        </Flex>
      </Content>
    </Layout>
  );
};

export default TextBlock;
