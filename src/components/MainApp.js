import React from "react";
import { Route } from "react-router-dom";
import MainHomePage from "./MarketingPage/MainHomePage";
import Navbar from "./MarketingPage/Navbar";
import MobileNavbar from "./MarketingPage/MobileNavbar";
import AboutPage from "./MarketingPage/about/AboutPage";
import ContactPage from "./MarketingPage/contact/ContactPage";
import Footer from "./MarketingPage/Footer";

import AdminMain from "./PrivateComponents/AdminMain";

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

      <Route exact path="/dashboard">
        <AdminMain />
      </Route>
      <Footer />
    </div>
  );
};

export default MainApp;
