import "./Mainpage.css";
import Content from "../Content/Content";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Categories from "../Categories/Categories";
import ProductPage from "../ProductPage/ProductPage";
import OrderPage from "../OrderPage/OrderPage";
import OrderDetail from "../OrderDetail/OrderDetail";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";

function Mainpage() {
  let [open, setOpen] = useState(false);
  let [active, setActive] = useState("All Categories");
  let [products, setProducts] = useState(undefined);
  let [loading, setLoading] = useState(true);
  let [cart, setCart] = useState([]);
  let [allProducts, setAllProducts] = useState(undefined);
  let navigate = useNavigate();

  function addCart(item) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == item.id) {
        cart[i].quantity += 1;
        setCart((cart) => [...cart]);
        return;
      }
    }
    item.quantity = 1;
    setCart((cart) => [...cart, item]);
  }

  function removeCart(item) {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == item.id) {
        if (cart[i].quantity > 1) {
          cart[i].quantity -= 1;
          setCart((cart) => [...cart]);
          return;
        }
        cart.splice(i, 1);
        setCart((cart) => [...cart]);
        return;
      }
    }
  }

  async function getData() {
    setLoading(true);
    axios.get("http://localhost:3001/store/products").then((data) => {
      setAllProducts(data.data.products);
      setProducts(data.data.products);
    });
  }

  useEffect(() => {
    const setup = async () => {
      await getData();
    };
    setup();
  }, []);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  useEffect(() => {
    function filterProducts() {
      if (active === "All Categories") {
        setProducts(allProducts);
        return;
      }
      let products = allProducts.filter((item, index) => {
        return item.category.toLowerCase() === active.toLowerCase();
      });
      setProducts(products);
    }
    filterProducts();
  }, [active, allProducts]);

  if (!loading) {
    let mainpage = (
      <div>
        <Sidebar open={open} setOpen={setOpen} setCart={setCart} cart={cart} />
        <Navbar setOpen={setOpen} />
        <Categories setOpen={setOpen} active={active} setActive={setActive} />
        <Content
          products={products}
          addCart={addCart}
          removeCart={removeCart}
        />
        <Footer />
      </div>
    );

    let productPage = (
      <div>
        <Sidebar open={open} setOpen={setOpen} setCart={setCart} cart={cart} />
        <Navbar setOpen={setOpen} />
        <ProductPage addCart={addCart} removeCart={removeCart}/>
      </div>
    );

    let orderPage = (
      <div>
        <Sidebar open={open} setOpen={setOpen} setCart={setCart} cart={cart} />
        <Navbar setOpen={setOpen} />
        <OrderPage/>
      </div>
    )

    let orderDetail = (
      <div>
        <Sidebar open={open} setOpen={setOpen} setCart={setCart} cart={cart} />
        <Navbar setOpen={setOpen} />
        <OrderDetail/>
      </div>
    )

    return (
      <Routes>
        <Route path="/products/:id" element={productPage} />
        <Route path="/orders" element={orderPage} />
        <Route path="/orders/:id" element={orderDetail} />
        <Route path="*" element={mainpage} />
      </Routes>
    );
    
  } else {
    return;
  }
}

export default Mainpage;
