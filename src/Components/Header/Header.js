import "./Header.css";
import { Space, Drawer, Menu, Typography } from "antd";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import SNSIcons from "../SNSIcons/SNSIcons";
import Footer from "../Footer/Footer";
const { Title } = Typography;
function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleDrawer = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <div className="navComp">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Title style={{ fontFamily: "cursive" }}>Hisa</Title>
          </Link>
        </div>
        <div style={{ float: "right" }} className="hamburgerIcon">
          <MenuOutlined
            style={{ color: "black", fontSize: 30 }}
            onClick={() => {
              setOpenMenu(true);
            }}
          />
        </div>

        <div className="horizontalMenu">
          <Space>
            <NavigationBar />
            <SNSIcons />
          </Space>
        </div>

        <Drawer
          placement="right"
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
          closable={true}
          onClick={toggleDrawer}
        >
          <NavigationBar isInline />

          <SNSIcons />
        </Drawer>
      </div>
      <Outlet />

      <Footer />
    </div>
  );
}

function NavigationBar({ isInline = false }) {
  const [current, setCurrent] = useState("h");
  const onClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        style={{
          border: "none",
          fontSize: 15,
          width: 200,
        }}
        onClick={onClick}
        selectedKeys={[current]}
        mode={isInline ? "inline" : "horizontal"}
      >
        <Menu.Item key="h">
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item key="c">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
