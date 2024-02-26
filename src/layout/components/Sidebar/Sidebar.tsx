import { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import Dashboard from "/assets/icons/Dashboard.svg";
import Companies from "/assets/icons/Companies.svg";
import Proposal from "/assets/icons/Proposal.svg";
import Staff from "/assets/icons/Staff.svg";
import Contacts from "/assets/icons/Contacts.svg";
import ListIcon from "/assets/icons/ListIcon.svg";
import Authentication from "/assets/icons/Authentication.svg";
import Settings from "/assets/icons/Settings.svg";
import Help from "/assets/icons/Help.svg";
import CollapseMenu from "/assets/icons/CollapseMenu.svg";

const { Sider } = Layout;

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    function handleResize() {
      setCollapsed(window.innerWidth <= 768);
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const menuItemsTop = [
    { key: "0", icon: <img src={Dashboard} alt="Dashboard" />, label: "Dashboard" },
    { key: "1", icon: <img src={Companies} alt="Companies" />, label: "Companies" },
    { key: "2", icon: <img src={Proposal} alt="Proposal" />, label: "Proposal" },
    { key: "3", icon: <img src={Staff} alt="Staff" />, label: "Staff" },
    { key: "4", icon: <img src={Contacts} alt="Contacts" />, label: "Contacts" },
  ];

  const menuItemsBottom = [
    { key: "5", icon: <img src={ListIcon} alt="Components" />, label: "Components" },
    { key: "6", icon: <img src={Authentication} alt="Authentication" />, label: "Authentication" },
    { key: "7", icon: <img src={Settings} alt="Settings" />, label: "Settings" },
    { key: "8", icon: <img src={Help} alt="Help" />, label: "Help" },
    {
      key: "9",
      icon: <img src={CollapseMenu} alt="Collapse Menu" />,
      label: "Collapse Menu",
      onClick: toggleCollapsed, // Collapse menüsü için onClick fonksiyonu eklendi
    },
  ];

  const handleMenuClick = ({ key }:any) => {
    if (key === "9") {
      toggleCollapsed();
    }
  };

  return (
    <Sider
      width={256}
      className="h-full px-3 font-bold overflow-auto fixed top-0 left-0"
      collapsible
      trigger={null}
      collapsed={collapsed}
      onCollapse={setCollapsed}
      theme="light"
    >
      <Menu
        className="py-4"
        theme="light"
        mode="inline"
        defaultSelectedKeys={['0']}
        items={menuItemsTop}
        onClick={handleMenuClick} 
      />
       <Menu
        className="2xl:pt-52 pt-24"
        theme="light"
        mode="inline"
        items={menuItemsBottom}
        onClick={handleMenuClick} 
      />
    </Sider>
  );
};

export default SidebarComponent;
