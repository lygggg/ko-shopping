import React from "react";

import styled from "styled-components";

import Theme from "../components/Theme";
import ProductList from "../components/ProductList";

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
