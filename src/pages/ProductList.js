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
    console.log(data.products);
    setProductList(data.products);
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
