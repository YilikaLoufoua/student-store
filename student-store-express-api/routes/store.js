const express = require("express");
const Store = require("../models/store");
const router = express.Router();

router.get("/products", async (req, res, next) => {
  try {
    const products = await Store.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});

router.get("/products/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const product = await Store.fetchProductById(productId);
    res.status(200).json({ product });
  } catch (err) {
    next(err);
  }
});

router.get("/orders", async (req, res, next) => {
  try {
    const orders = await Store.listOrders();
    res.status(200).json({ orders });
  } catch (err) {
    next(err);
  }
});

router.get("/orders/:orderId", async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const order = await Store.fetchOrderById(orderId);
    res.status(200).json({ order });
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const cart = req.body.cart;
    const userInfo = req.body.userInfo;
    const purchase = await Store.purchaseProducts(cart, userInfo);
    res.status(200).json({ purchase, cart });
  } catch (err) {
    next(err);
  }
});

module.exports = router;