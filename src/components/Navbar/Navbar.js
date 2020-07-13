import React, { useState } from "react";
import { Menu } from "antd";
import {
  ContactsOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import './Navbar.scss';


const Navbar = ({setTitle}) => {

    const [current, setCurrent] = useState('mail');
    const [mode, setMode] = useState('horizontal');
    const [theme, setTheme] = useState('dark');

    const handleClick = (current, title) => {
        setCurrent(current);
        setTitle(title);
    };

  return (
    <>
      <Menu selectedKeys={[current]} mode={mode} theme={theme} className="navbar">
        <Menu.Item key="mail" className="navbar__item" onClick={() => handleClick('mail', 'Home')} icon={<HomeOutlined />}>
          Home
        </Menu.Item>
        <Menu.Item key="app"  className="navbar__item" onClick={() => handleClick('app', 'Contact')} icon={<ContactsOutlined />}>
          Contact
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navbar;
