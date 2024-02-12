import { Layout } from "antd";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import AppContent from "./AppContent";

const AppLayout = () => {
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
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider width="50%"/>
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
