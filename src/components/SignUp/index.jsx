import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./SignUp.css";

// interfece Dataprops {
//     titleText?: string,
//     isPassword?: boolean,
//     buttonText?: string,
//     linkText?: string,
//     linkPath?: string,
//     loading?: boolean,
// };
const onSubmit = () => {

}
const SignUp = ({
  titleText = "Welcome Back",
  buttomText = "Please enter your details",
  isPassword = true,
  buttonText = "SIGN IN",
  linkText = "Sign in",
  linkPath = "/signup",
  loading = false,
  isCreateAccount = false,
  linkMessage = "Don't have an account? "

  
}) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="login">
      <div className="inner">
        <div className="header">
          <h2>{titleText}</h2>
        </div>
        <h3>{buttomText}</h3>

        <Form layout={"vertical"} autoComplete="off">
          {
            isCreateAccount && (
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your Name!" }]}
              >
                <Input placeholder="Name" type="text" />
              </Form.Item>
          )}

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input placeholder="Password" type="password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              {buttonText}
            </Button>
            <p style={{ textAlign: "left", marginTop: "12px" }}>
              {linkMessage} <Link to={linkPath} style={{color:"black", textDecoration: "underline", fontWeight: "450"}}>{linkText}</Link>
            </p>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
