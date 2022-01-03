import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import BasketList from "./pages/BasketList";
import Product from "./pages/Product";
import Header from "./pages/Header";
import ProductDetail from "./pages/productDetail";

import styled from "styled-components";

function App() {
  return (
    <BrowserRouter basename="/ko-shopping">
      <InnerDiv>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/products/:productId" component={ProductDetail}></Route>
        <Route path="/basket" component={BasketList} />
      </InnerDiv>
    </BrowserRouter>
  );
}

const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;
export default App;
