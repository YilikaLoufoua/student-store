import axios from "axios";
import React, { useEffect } from "react";
import "./OrderPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const getFilteredOrders = (inputText, orders) => {
  if (!inputText) {
    return orders;
  }
  return orders.filter((order) =>
    order.email.includes(inputText) ||
    order.name.includes(inputText) ||
    order.id.includes(inputText));
}

export default function OrderPage() {

  let [loading, setLoading] = useState(true);
  let [orders, setOrders] = useState([]);
  let [inputText, setInputText] = useState("");

  useEffect(() => {
    const setup = async () => {
      await getData();
    };
    setup();
  }, []);

  useEffect(() => {
    if (orders) {
      setLoading(false);
    }
  }, [orders]);

  async function getData() {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_REMOTE_HOST_URL}/store/orders`).then((data) => {
      setOrders(data.data.orders);
    });
  }

  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatPrice = (amount) => {
    return `$${formatter.format(amount)}`;
  };
  
  if (!loading) {

    const filteredOrders = getFilteredOrders(inputText, orders);
    
    return (
    <div className="OrderPage">
      <h2>Past Orders</h2>
      <div className="searchbar">
        <input id="search" onChange={e => setInputText(e.target.value)} placeholder="Search by name, email, or order ID" />
        <SearchIcon
          sx={{ color: "white", fontSize: 52, background: "#02C385" }}
        />
      </div>
      <div className="table">
        <div className="table-header table-row">
          <span className="col x2">Customer Name</span>
          <span className="col x4">Customer Email</span>
          <span className="col x4">Order Number</span>
          <span className="col x2">Total</span>
        </div>
        {filteredOrders.map((order) => (
          <Link className="link" to={"/orders/" + order.id} key={order.id}>
            <div className="table-row">
              <span className="col x2">{order.name}</span>
              <span className="col x4">{order.email}</span>
              <span className="col x4">{order.id}</span>
              <span className="col x2">{formatPrice(order.total)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
    );
  }
}