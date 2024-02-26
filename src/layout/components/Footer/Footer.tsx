import { Layout } from "antd";

const { Footer } = Layout;
const FooterComponent = ()=> {
  return (
      <Footer className="text-center py-4">
        Esra Nur Mülkpınar ©{new Date().getFullYear()}
      </Footer>
  );
};

export default FooterComponent;
