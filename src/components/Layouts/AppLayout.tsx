import { ConfigProvider, Layout, theme } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors";

const AppLayout = () => {
  const { backgroundColor } = useSelector(themeSelector);
  const isMobile = window.innerWidth < 800;
  if (isMobile) {
    return (
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider width="100%" />
        </Layout>
        <AppContent />
      </Layout>
    );
  }
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        components: {
          Layout: {
            headerBg: backgroundColor,
            bodyBg: backgroundColor,
            siderBg: backgroundColor,
          },
        },
      }}
    >
      <Layout>
        <AppHeader />
        <Layout>
          <AppSider width="50%" />
          <AppContent />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
