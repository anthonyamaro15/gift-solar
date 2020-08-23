import React from "react";
import { Route } from "react-router-dom";
import MainHomePage from "./MarketingPage/MainHomePage";
import Navbar from "./MarketingPage/Navbar";
import AboutPage from "./MarketingPage/about/AboutPage";
import Footer from "./MarketingPage/Footer";

const MainApp = () => {
  return (
    <div>
      <Navbar />
      <Route exact path="/">
        <MainHomePage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Footer />
    </div>
  );
};

export default MainApp;
