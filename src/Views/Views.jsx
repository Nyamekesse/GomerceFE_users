import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Cart from "../pages/CartPage/Cart";
import CheckoutPayment from "../pages/CheckoutPayment/CheckoutPayment";
import CheckoutDelivery from "../pages/CheckoutDelivery/CheckoutDelivery";
import ItemPage from "../pages/ItemPage";
import LogIn from "../pages/LogIn";
import OrdersDetail from "../pages/OrdersDetail/OrdersDetail";
import OrdersHistory from "../pages/OrderHistory/OrdersHistory";
import SearchPage from "../pages/SearchPage/SearchPage";
import SignUp from "../pages/SignUp";
import PageNotFound from "../pages/PageNotFound";
import CheckoutAddress from "../pages/CheckoutAddressPage/CheckoutAddress";
const Views = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home" element={<LandingPage />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/checkout-address" element={<CheckoutAddress />} />
      <Route exact path="/checkout-payment" element={<CheckoutPayment />} />
      <Route exact path="/checkout-delivery" element={<CheckoutDelivery />} />
      <Route exact path="/item-page" element={<ItemPage />} />
      <Route exact path="/login" element={<LogIn />} />
      <Route exact path="/order-detail" element={<OrdersDetail />} />
      <Route exact path="/order-history" element={<OrdersHistory />} />
      <Route exact path="/products/search" element={<SearchPage />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Views;
