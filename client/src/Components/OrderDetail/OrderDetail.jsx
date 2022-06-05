import axios from "axios";
import React, { useEffect } from "react";
import "./OrderDetail.css";
import { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

export default function OrderDetail() {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatPrice = (amount) => {
    return `$${formatter.format(amount)}`;
  };

  let params = useParams();
  let [loading, setLoading] = useState(true);
  let [order, setOrder] = useState(undefined);
  let navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      setLoading(true);
      let order = await axios.get(`${process.env.REACT_APP_REMOTE_HOST_URL}/store/orders/` + params.id);
      setOrder(order.data.order);
    }

    const setup = async () => {
      await getData();
    };

    setup();
    
  }, [params.id]);

  useEffect(() => {
    if (order) {
      setLoading(false);
    }
  }, [order]);

  if (!loading) {
    return (
      <div className="OrderDetail">
        <div className="container">
          <h1 className="order-number">Order # {order.id}</h1>
          <p>Customer: {order.name}</p>
          <p>Customer Email: {order.email}</p>
          <p>Total: {formatPrice(order.total)}</p>
        </div>
        <div className="table">
          <div className="table-header table-row">
            <span className="col x3">Product</span>
            <span className="col x2">Category</span>
            <span className="col x2">Quantity</span>
            <span className="col x1">Subtotal</span>
            <span className="col x1">Total</span>
          </div>
            {order.receipt.productRows.map((product) => (
              <div className="table-row">
                <span className="image">
                  <img
                    style={{ cursor: "pointer" }}
                    src={product.image}
                    alt="product cover"
                    onClick={() => {
                      navigate("/products/" + product.id);
                    }}/>
                </span>
                <span className="col x3 product-name"
                  onClick={() => {
                    navigate("/products/" + product.id);
                  }} >{product.name}
                </span>
                <span className="col x2">{product.category}</span>
                <span className="col x2">{product.quantity}</span>
                <span className="col x1">{formatPrice(product.totalPrice)}</span>
                <span className="col x1">{formatPrice(product.totalPrice*1.0875)}</span>
              </div>
            ))}
        </div>
      </div>
    );
  }
}