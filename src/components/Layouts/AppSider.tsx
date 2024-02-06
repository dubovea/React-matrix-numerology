import { Layout } from "antd";
import Matrix from "../Matrix";
const { Sider } = Layout;
const siderStyle = {
  padding: "1rem",
};

const AppSider = () => {
  return (
    <Sider width="50%" style={siderStyle}>
      <Matrix />
    </Sider>
  );
};

export default AppSider;
