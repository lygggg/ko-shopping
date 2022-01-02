import React from "react";
import axios from "axios";

import styled from "styled-components";

import Theme from "./Theme";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <Div>
      <Theme />
      <ProductList />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export default Home;
