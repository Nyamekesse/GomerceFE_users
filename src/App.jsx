import Views from "./Views/Views";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React from "react";
import { Box, styled } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import "./App.css";
const App = () => {
  let location = useLocation();

  const AppContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  }));
  const exceptPath = ["/login", "/signup", "/page-not-found"];

  return (
    <AppContainer>
      {!exceptPath.includes(location.pathname) && <Navbar />}
      <Views />

      {!exceptPath.includes(location.pathname) && <Footer />}
    </AppContainer>
  );
};

export default App;
