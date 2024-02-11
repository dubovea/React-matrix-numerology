import { Layout } from "antd";
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
      <TableComponent />
      <TextBlock />
    </Content>
  );
};

export default AppContent;
