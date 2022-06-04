import React from "react";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Navbar({ setOpen }) {
  return (
    <header>
      <nav className="navbar">
        <div className="logos">
          <img src={require("./logo.png")} alt="logo" width="80px"></img>

          <div className="social">
            <InstagramIcon style={{ color: "white" }} />
            <TwitterIcon style={{ color: "white" }} />
            <FacebookIcon style={{ color: "white" }} />
          </div>
        </div>
        <div className="nav">
          <a href="/#">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#contact">Contact Us</a>
          <a href="/orders">Past Orders</a>
          <a href="/#" onClick={() => setOpen(true)}>
            Buy Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
