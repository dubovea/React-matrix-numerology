import { Layout, Typography } from "antd";
import TableComponent from "../Table";
import TextBlock from "../TextBlock";
const { Content } = Layout;

const AppContent = () => {
  return (
    <Content className="text-center text-white p-1">
      <Typography.Title
        style={{ color: "white", fontWeight: "bold", textAlign: "start" }}
        level={4}
      >
        Карта здоровья
      </Typography.Title>
      <TableComponent/>
      <TextBlock />
    </Content>
  );
};

export default AppContent;
