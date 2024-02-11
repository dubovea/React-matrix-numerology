import { Layout, Typography } from "antd";
import TableComponent from "../Table";
import TextBlock from "../TextBlock";
const { Content } = Layout;

const AppContent = () => {
  return (
    <Content
      style={{
        textAlign: "center",
        minHeight: "calc(100vh - 60px)",
        color: "#fff",
        backgroundColor: "#001529",
        padding: "1rem",
      }}
    >
      <Typography.Title
        style={{ color: "white", fontWeight: "bold", textAlign: "start" }}
        level={4}
      >
        Карта здоровья
      </Typography.Title>
      <TableComponent />
      <TextBlock />
    </Content>
  );
};

export default AppContent;
