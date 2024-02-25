// SidebarComponent.js
import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const SidebarComponent = () => {
  const items = [
    { icon: UserOutlined, label: "Subnav 1", key: "sub1" },
    { icon: LaptopOutlined, label: "Subnav 2", key: "sub2" },
    { icon: NotificationOutlined, label: "Subnav 3", key: "sub3" },
  ].map(({ icon: Icon, label, key }) => ({
    key,
    icon: <Icon />,
    label,
  }));

  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function handleResize() {
      setCollapsed(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sider
      className="h-full"
      collapsible
      trigger={null}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      theme="light"
    >
      <Menu
        defaultSelectedKeys={["1"]}
        items={items}
        className="h-full "
      />
    </Sider>
  );
};

export default SidebarComponent;
