import { Layout, Menu } from "antd";
import LogoIcon from "/assets/icons/LogoIcon.svg";
import WebIcon from "/assets/icons/WebIcon.svg";
import ListIcon from "/assets/icons/ListIcon.svg";
import NotificationIcon from "/assets/icons/NotificationIcon.svg";
import Avatar from "/assets/images/Avatar.png";

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header className="flex w-screen items-center bg-white justify-between border-black">
      <div className="flex items-center">
        <img className="mr-[6px] p-[6px]" src={LogoIcon} alt="Logo" />
        <div className="text-xl">Company CRM</div>
      </div>
      <Menu theme="light" mode="horizontal" className="flex justify-end flex-1 min-w-0 border-none">
        <Menu.Item className="" key="0">
          <img  src={WebIcon} alt="Web Icon 1" />
        </Menu.Item>
        <Menu.Item key="2">
          <img  src={NotificationIcon} alt="Web Icon 3" />
        </Menu.Item>
        <Menu.Item key="1">
          <img  src={ListIcon} alt="Web Icon 2" />
        </Menu.Item>
        <Menu.Item key="3">
          <img  src={Avatar} alt="Web Icon 3" />
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
