import { Layout } from "antd";

const { Footer } = Layout;
const FooterComponent = ()=> {
  return (
    <div>
      <Footer className="text-center ">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </div>
  );
};

export default FooterComponent;
