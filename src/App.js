import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Product from "./pages/Product";

function Shopping() {
  return (
    <BrowserRouter basename="/ko-shopping">
      <div>
        <Link to="/">홈</Link>
        <Link to="/productDetail">상품</Link>
        <Link to="/basket">장바구니</Link>
        <Route exact path="/" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/basket" component={Basket} />
      </div>
    </BrowserRouter>
  );
}
export default Shopping;
