import React, { useEffect, useState } from "react";
import productStore from "../stores/productStore";

import Product from "./Product";

import styled from "styled-components";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = () => {
    const data = productStore.getProducts();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainDiv>
      <ListDiv>
        {productList.map((product) => (
          <div key={product.id}>
            <Product product={product}></Product>
          </div>
        ))}
      </ListDiv>
    </MainDiv>
  );
};

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 30% 30% 30%;
  justify-content: center;
  grid-row-gap: 30px;
  border: 1px solid #eaeaea;
`;
const MainDiv = styled.div`
  height: 1500px;
`;

export default ProductList;
