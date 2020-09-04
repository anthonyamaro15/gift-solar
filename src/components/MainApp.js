import React from "react";
import { Route } from "react-router-dom";
import MainHomePage from "./MarketingPage/MainHomePage";
import Navbar from "./MarketingPage/Navbar";
import MobileNavbar from "./MarketingPage/MobileNavbar";
import AboutPage from "./MarketingPage/about/AboutPage";
import ContactPage from "./MarketingPage/contact/ContactPage";
import Footer from "./MarketingPage/Footer";

import AdminMain from "./PrivateComponents/AdminMain";
import ForgotPassword from "./PrivateComponents/ForgotPassword";
import ResetPassword from "./PrivateComponents/ResetPassword";
import PrivateRoute from "../privateRoute/PrivateRoute";

const MainApp = () => {
  return (
    <div>
      <Route exact path="/">
        <Navbar />
        <MobileNavbar />
        <MainHomePage />
      </Route>
      <Route exact path="/about">
        <Navbar />
        <MobileNavbar />
        <AboutPage />
      </Route>
      <Route exact path="/contact">
        <Navbar />
        <MobileNavbar />
        <ContactPage />
      </Route>

      <Route exact path="/forgotpassword">
        <Navbar />
        <MobileNavbar />
        <ForgotPassword />
      </Route>

      <Route exact path="/resetpassword/:token">
        <Navbar />
        <MobileNavbar />
        <ResetPassword />
      </Route>

      <PrivateRoute path="/dashboard" component={AdminMain} />
      <Footer />
    </div>
  );
};

export default MainApp;
