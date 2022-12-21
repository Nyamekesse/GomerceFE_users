import React from "react";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/custom-theme";

import LoginComponent from "../../components/Login/LoginComponent";

const Login = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginComponent />
    </ThemeProvider>
  );
};

export default Login;
