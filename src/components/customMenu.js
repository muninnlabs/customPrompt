import React, { useState } from 'react'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import {  Link } from "react-router-dom";

const items = [
    {
      icon: <MailOutlined />,
      label: ( <Link to='/'>Home</Link> ),
      key: 'za',
    },
    {
      label: ( <Link to='/about'>About</Link> ),
      key: 'app',
      icon: <AppstoreOutlined />,
    },
  ];

export default function CustomMenu() {
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        setCurrent(e.key);
      };
  return (
    <Menu 
      onClick={onClick} 
      selectedKeys={[current]} 
      mode="horizontal" items={items} />
  )
}
