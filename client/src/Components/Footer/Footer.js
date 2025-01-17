import React from "react";
import { useNavigate } from "react-router-dom";

import "./Footer.css";
export default function Footer() {
  let navigate = useNavigate();
  return (
    <div class="ww">
      <div class="wrapper">
        <div class="links">
          <ul class="section">
            <h4>Categories</h4>
            <li>All Categories</li>
            <li>Clothes</li>
            <li>Food</li>
            <li>Accessories</li>
            <li>Tech</li>
          </ul>
          <ul class="section">
            <h4>Company</h4>
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Careers</li>
          </ul>
          <ul class="section" id="contact">
            <h4>Support</h4>
            <li>Contact Us</li>
            <li>Money Refund</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Open Dispute</li>
          </ul>
          <ul class="section">
            <h4>Account</h4>
            <li>Login</li>
            <li>Register</li>
            <li>Account Setting</li>
            <li id="orders" onClick={() => {
              navigate("/orders");
            }}>Past Orders</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
