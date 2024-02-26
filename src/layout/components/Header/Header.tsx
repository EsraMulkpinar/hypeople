import  { useState, useEffect } from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import LogoIcon from '/assets/icons/LogoIcon.svg';
import WebIcon from '/assets/icons/WebIcon.svg';
import ListIcon from '/assets/icons/ListIcon.svg';
import NotificationIcon from '/assets/icons/NotificationIcon.svg';
import Avatar from '/assets/images/Avatar.png';

const { Header } = Layout;

const HeaderComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const breakpoint = 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menu = (
    <Menu>
      <Menu.Item key="web">
        <img src={WebIcon} alt="Web Icon" />
      </Menu.Item>
      <Menu.Item key="notification">
        <img src={NotificationIcon} alt="Notification Icon" />
      </Menu.Item>
      <Menu.Item key="list">
        <img src={ListIcon} alt="List Icon" />
      </Menu.Item>
      <Menu.Item key="avatar">
        <img src={Avatar} alt="Avatar" />
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className="flex w-screen items-center bg-white justify-between ">
      <div className="flex items-center">
        <img className="mr-[6px] p-[6px]" src={LogoIcon} alt="Logo" />
        <div className="text-xl">Company CRM</div>
      </div>
      {windowWidth > breakpoint ? (
        <Menu theme="light" mode="horizontal" className="flex justify-end flex-1 min-w-0 border-none">
          <Menu.Item key="web">
            <img src={WebIcon} alt="Web Icon" />
          </Menu.Item>
          <Menu.Item key="notification">
            <img src={NotificationIcon} alt="Notification Icon" />
          </Menu.Item>
          <Menu.Item key="list">
            <img src={ListIcon} alt="List Icon" />
          </Menu.Item>
          <Menu.Item key="avatar">
            <img src={Avatar} alt="Avatar" />
          </Menu.Item>
        </Menu>
      ) : (
        <Dropdown overlay={menu} trigger={['click']}>
          <a onClick={(e) => e.preventDefault()}>
            <MoreOutlined />
          </a>
        </Dropdown>
      )}
    </Header>
  );
};

export default HeaderComponent;
