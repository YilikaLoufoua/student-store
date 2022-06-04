import axios from "axios";
import React, { useEffect } from "react";
import "./ProductPage.css";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import { useParams } from "react-router";
import { useState } from "react";

export default function ProductPage({ addCart, removeCart }) {
  let [product, setProduct] = useState(undefined);
  let [loading, setLoading] = useState(true);
  let params = useParams();
  useEffect(() => {
    const setup = async () => {
      await getData();
    };
    setup();
  }, []);
  async function getData() {
    setLoading(true);
    let product = await axios.get("http://localhost:3001/store/products/" + params.id);
    setProduct(product.data.product);
  }
  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  if (!loading) {
    let name = product.name;
    let category = product.category;
    let image = product.image;
    let description = product.description;
    let price = product.price;
    return (
      <div className="www">
        <div className="container">
          <img className="mm" src={image} alt="" />
          <h1>{name}</h1>
          <h2>{category}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="actions">
            <div className="buttons">
              <button className="transparent" onClick={() => addCart(product)}>
                <AddBoxIcon sx={{ color: "#02c385" }} />
              </button>
              <button className="transparent" onClick={() => removeCart(product)}>
                <IndeterminateCheckBoxIcon sx={{ color: "#02c385" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}