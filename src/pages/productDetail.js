import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import styled from "styled-components";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const { productId } = useParams();

  const getProduct = async (id) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_PSTM_API}/products/${id}`
    );
    setProduct(data.products[0]);
  };

  useEffect(() => {
    getProduct(productId);
  }, []);

  return (
    <>
      <div>
        <img src={product.thumbnail} />
        <NameDiv>{product.name}</NameDiv>
        <PriceDiv>{product.price}</PriceDiv>
      </div>
      <MenuDiv>
        <ButtonDiv>상품 설명</ButtonDiv>
        <ButtonDiv>상품 후기</ButtonDiv>
      </MenuDiv>
      <img src={product.thumbnail} />
    </>
  );
};

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-size: 30px;
  border: 1px solid;
`;

const NameDiv = styled.div`
  font-size: 50px;
  font-weight: bold;
`;

const PriceDiv = styled.div`
  font-size: 25px;
`;

const MenuDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 30px;
`;
export default ProductDetail;
