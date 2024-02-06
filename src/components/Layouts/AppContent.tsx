import { Layout } from "antd";
import TableComponent from "../Table";
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
    </Content>
  );
};

export default AppContent;
