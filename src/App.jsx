import Views from "./Views/Views";
import AppContainer from "./components/AppContainer/AppContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { getProductCategories } from "./actions/products";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import PageNotFound from "./pages/PageNotFound";
import LogIn from "./pages/Login/LogIn";
import SignUp from "./pages/SignUp/SignUp";
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
      <Routes>
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
    </AppContainer>
  );
};

export default App;
