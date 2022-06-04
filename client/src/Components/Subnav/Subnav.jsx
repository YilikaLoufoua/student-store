import React from "react";

import "./Subnav.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
export default function Subnav() {
  return (
    <div className="wrap">
      <div className="row">
        <div className="searchbar">
          <input id="search" placeholder="Search..." />
          <SearchIcon
            sx={{ color: "white", fontSize: 52, background: "#02C385" }}
          />
        </div>
        <div className="cart">
          <h3 style={{ color: "white" }}>My Cart</h3>
          <ShoppingCartIcon sx={{ color: "white", fontSize: 52 }} />
        </div>
      </div>

      <div className="row">
        <MenuIcon sx={{ fontSize: 40, color: "gray" }} />

        <div className="menu">
          <li>
            <button>All Categories</button>
          </li>
          <li>
            <button>Clothing</button>
          </li>
          <li>
            <button>Food</button>
          </li>
          <li>
            <button>Accessories</button>
          </li>
          <li>
            <button>Tech</button>
          </li>
        </div>
      </div>
    </div>
  );
}
