import React from "react";
import "./Content.css";
import Product from "../Product/Product";
export default function Content({ products, addCart, removeCart }) {
  return (
    <div class="wrapp">
      <h1>Best Selling Products</h1>
      <br />
      <div id="products">
        <div id="product-grid">
          {products.map((item, index) => {
            return (
              <Product
                addCart={addCart}
                removeCart={removeCart}
                product={item}
              />
            );
          })}
        </div>
      </div>
      <h1 id="about">About</h1>
      <div class="about">
        <div class="atext">
          <p>
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <br />
          <p>
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
          <br />
          <p>
            All proceeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
        <div class="logo">
          <img src={require("./logo.png")} alt="logo"></img>
        </div>
      </div>
    </div>
  );
}
