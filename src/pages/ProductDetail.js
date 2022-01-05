import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewList from "./ReviewList";
import productStore from "../stores/productStore";

import styled from "styled-components";

const ProductDetail = () => {
  const [product, setProduct] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const { productId } = useParams();

  const getProduct = (id) => {
    const data = productStore.getProduct(id);
    setProduct(data);
  };

  useEffect(() => {
    getProduct(productId);
  }, []);

  return (
    <>
      <div>
        <Img src={product.thumbnail} />
        <NameDiv>{product.name}</NameDiv>
        <PriceDiv>{product.price}</PriceDiv>
      </div>
      <MenuDiv>
        <ButtonDiv onClick={() => setReviewMode(false)}>상품 설명</ButtonDiv>
        <ButtonDiv onClick={() => setReviewMode(true)}>상품 후기</ButtonDiv>
      </MenuDiv>
      <div>
        {reviewMode === false ? (
          <img src={product.thumbnail} />
        ) : (
          <ReviewList />
        )}
      </div>
      <OrderDiv>장바구니 담기</OrderDiv>
    </>
  );
};

const Img = styled.img`
  width: 100%;
`;

const OrderDiv = styled.div`
  width: 100%;
  height: 80px;
  background: #86e57f;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
`;

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
