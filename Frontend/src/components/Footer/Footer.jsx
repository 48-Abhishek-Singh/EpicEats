import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>
          At EpicEats, we bring you the finest recipes, food reviews, and culinary tips from around the globe. Whether you're a home cook or a seasoned chef, our mission is to inspire and elevate your cooking experience. Join our community and embark on a flavorful journey today! 
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.instagram_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-945-562-5621</li>
            <li>contact@epiceats.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © EpicEats.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
