import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./../resources/defaultlayout.css";
import { UserOutlined, SolutionOutlined } from "@ant-design/icons";
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("resume"));
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
      <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("resume");
          navigate("/login");
        }}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="layout">
      <div className="header">
        <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}}><SolutionOutlined style={{ fontSize: '25px'}} />ResumeBuilder</h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button className="prof" icon={<UserOutlined style={{ fontSize: '20px'}} />}>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content" style={{overflow:'scroll'}}>{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
