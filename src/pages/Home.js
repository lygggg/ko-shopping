import React from "react";
import axios from "axios";

import styled from "styled-components";

import Theme from "./Theme";
import ProductList from "./ProductList";

const getHome = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_PSTM_API}/home`);
  console.log(data.themes);
};

const Home = () => {
  return (
    <Div>
      <Theme />
      <button onClick={getHome}>클릭</button>
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
