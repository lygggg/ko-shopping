import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Product from "./Product";

import styled from "styled-components";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_PSTM_API}/products`
    );
    setProductList(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ListDiv>
      {productList.map((product) => (
        <div key={product.id}>
          <Product product={product}></Product>
        </div>
      ))}
    </ListDiv>
  );
};

const ListDiv = styled.div`
width: 100%
height: 100%;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 300px 300px 300px;
  justify-content: center;
  grid-row-gap: 100px
`;

export default ProductList;
