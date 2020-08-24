import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-inner">
        <div className="vegas-info">
          <span>
            Email:
            <a href="www.giftsolar.com" target="_blank">
              info@giftsolarpower.com
            </a>
          </span>
          <span>Business WhatsApp 956-518-3132</span>
        </div>
        <div className="texas-info">
          <span>Lic. TX803652509</span>
          <span>Palmview TX </span>
          <span>
            <a href="www.facebook.com" target="_blank" className="facebook">
              <FaFacebook />
            </a>
          </span>
          <span>Lic. NV20171275489</span>
          <span>Las Vegas NV </span>
          <span>
            <a href="www.facebook.com" target="_blank" className="facebook">
              <FaFacebook />
            </a>
          </span>
        </div>
        <p>&copy; Copyright Gift Solar LLC.</p>
      </div>
    </footer>
  );
};

export default Footer;
