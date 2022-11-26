import React, {useState} from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Login from "../../Assets/Images/Login.png";
import "./SignUp.css";

// interfece Dataprops {
//     titleText?: string,
//     isPassword?: boolean,
//     buttonText?: string,
//     linkText?: string,
//     linkPath?: string,
//     loading?: boolean,
// };

const SignUp = ({
  titleText = "Welcome Back",
  buttomText = "Please enter your details",
  isPassword = true,
  buttonText = "SIGN IN",
  linkText = "Sign in",
  linkPath = "/signup",
  loading = false,
  image = Login,
  isCreateAccount = false,
  linkMessage = "Don't have an account? ",
  signupStyle
}) => {
  // const [email, SetEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault()

  //   if (email && password) {
  //     console.log(email, password)
  //   }
  // }

  return (
    <div className={signupStyle?`login displayRight`:"login"}>
      <div className="image">
        <img src={image} alt="Italian Trulli" />
        </div>
      
        <div className="inner">
          <div className="innerContainer">
          <div className="header">
            <h2>{titleText}</h2>
          </div>
          <h3>{buttomText}</h3>
          {isCreateAccount && (
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "100%" },
              }}
              noValidate
              autoComplete="off"
              // onSubmit={handleSubmit}
            >
              <h4>Name</h4>
              <br />
              <TextField fullWidth required label="Name" id="fullWidth" />
            </Box>
          )}

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <h4>Email</h4>

            <TextField 
            fullWidth required label="Email" id="fullWidth" />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off"
          >
            <h4>Password</h4>

            <TextField 
            fullWidth required label="Password" id="fullWidth" />
          </Box>
          <div className="buttonSignup">
            <Button
              sx={{
                color: "#fff",
                borderColor: "#2b2c2d",
                background: "#101011",
                textShadow: "0 -1px 0 rgb(0 0 0 / 12%)",
                boxShadow: "0 2px 0 rgb(0 0 0 / 5%)",
                m: 1,
                width: "40%",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  background: "#b29167",
                  borderColor: "#b29167",
                  textShadow: "0 -1px 0 rgb(0 0 0 / 12%)",
                  boxShadow: "0 2px 0 rgb(0 0 0 / 5%)",
                },
                "&:active": {
                  backgroundColor: "#b29168",
                },
              }}
              fullWidth
              variant="outlined"
            >
              {buttonText}
            </Button>
          </div>

          <p style={{ marginTop: "12px" }}>
            {linkMessage}{" "}
            <Link
              to={linkPath}
              style={{
                color: "black",
                textDecoration: "underline",
                fontWeight: "450",
              }}
            >
              {linkText}
            </Link>
          </p>
          </div>
        </div>
      
    </div>
  );
};

export default SignUp;

{
  /* <Form layout={"vertical"} autoComplete="off">
          {isCreateAccount && (
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
              {linkMessage}{" "}
              <Link
                to={linkPath}
                style={{
                  color: "black",
                  textDecoration: "underline",
                  fontWeight: "450",
                }}
              >
                {linkText}
              </Link>
            </p>
          </Form.Item>
        </Form> */
}
