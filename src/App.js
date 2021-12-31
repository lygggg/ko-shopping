import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import Product from "./pages/Product";
import Header from "./pages/Header";
import ProductDetail from "./pages/productDetail";

function App() {
  return (
    <BrowserRouter basename="/ko-shopping">
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/product" component={ProductDetail} />
        <Route path="/basket" component={Basket} />
      </div>
    </BrowserRouter>
  );
}
export default App;
