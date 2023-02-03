import React, { useEffect, useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    try {
      if (values.password === values.cpassword) {
        const ucheck = await axios.post(`${process.env.REACT_APP_BACKEND_URL}api/user/register`, values);
        if (ucheck.data === "uexists") {
          setLoading(false);
          message.error("User already exist!");
        } else {
          setLoading(false);
          message.success("Registration successfull");
        }
      } else {
        setLoading(false);
        message.error("Password mismatch!");
      }
    } catch (error) {
      setLoading(false);
      message.error("Registration failed");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("resume")) {
      navigate("/home");
    }
  });

  return (
    <div className="auth-parent">
      <h1 className="brand">ResumeBuilder</h1>
      {loading && <Spin size="large" />}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm Password">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login"><u>Click Here to Login</u></Link>
          <Button type="primary" htmlType="submit" className="prof">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
