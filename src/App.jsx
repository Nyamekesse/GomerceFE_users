import Views from "./Views/Views";
import AppContainer from "./components/AppContainer/AppContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getProductCategories } from "./actions/products";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductCategories());
  }, [dispatch]);
  return (
    <AppContainer>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Navbar />
      )}
      <Views />
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </AppContainer>
  );
};

export default App;
