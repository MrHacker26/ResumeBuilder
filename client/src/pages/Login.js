import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "../resources/authentication.css";
import axios from "axios";
function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const onFinish = async (values) => {
    setLoading(true)
    try {
      const user = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/user/login`, values);
      message.success("Login successful");
      localStorage.setItem("resume", JSON.stringify(user.data));
      setLoading(false)
      navigate('/home')
    } catch (error) {
      setLoading(false)
      message.error("Login failed");
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('resume'))
    {
      navigate('/home')
    }
  })

  return (
    <div className="auth-parent">
      {loading && <Spin size="large"/>}
      <h1 className="brand">ResumeBuilder</h1>
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register"><u>Click Here to Register</u></Link>
          <Button type="primary" htmlType="submit" className="prof">
            LOGIN
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
