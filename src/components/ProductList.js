import React, { useEffect, useState } from "react";
import { getProducts } from "../service/PrductService";

import Product from "./Product";

import styled from "styled-components";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProductList(data);
  };

  useEffect(() => {
    fetchProducts();
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-row-gap: 30px;
  border: 1px solid #eaeaea;
`;
const MainDiv = styled.div`
  height: 1500px;
`;

export default ProductList;
