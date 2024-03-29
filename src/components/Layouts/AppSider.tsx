import { Layout } from "antd";
import Matrix from "../Matrix";
const { Sider } = Layout;
const siderStyle = {
  padding: "1rem",
};

const AppSider: React.FC<{ width: string }> = ({ width }) => {
  return (
    <Sider width={width} style={siderStyle}>
      <Matrix />
    </Sider>
  );
};

export default AppSider;
