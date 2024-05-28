import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-scroll';

const Navbar = () => (
  <Menu mode="horizontal">
    <Menu.Item key="home">
      <Link to="home" smooth={true}>Home</Link>
    </Menu.Item>
    <Menu.Item key="about">
      <Link to="about" smooth={true}>About Me</Link>
    </Menu.Item>
    <Menu.Item key="portfolio">
      <Link to="portfolio" smooth={true}>Portfolio</Link>
    </Menu.Item>
    <Menu.Item key="contact">
      <Link to="contact" smooth={true}>Contact</Link>
    </Menu.Item>
  </Menu>
);

export default Navbar;