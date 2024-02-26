import { ConfigProvider, Layout, theme } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";
import { useSelector } from "react-redux";
import { themeSelector } from "../../redux/theme/selectors";

const AppLayout = () => {
  const { temp } = useSelector(themeSelector);
  const backgroundColor = temp.colors.backgroundColor;
  const isMobile = window.innerWidth < 800;
  if (isMobile) {
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
            <AppSider width="100%" />
          </Layout>
          <AppContent />
        </Layout>
      </ConfigProvider>
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
      <Layout className="h-[calc(100vh)] ">
        <AppHeader />
        <Layout className="mr-16">
          <AppSider width="60%" />
          <AppContent />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
