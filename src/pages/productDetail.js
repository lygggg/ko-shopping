import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ReviewList from "./ReviewList";

import styled from "styled-components";

const ProductDetail = () => {
  // const [product, setProduct] = useState([]);
  const [reviewMode, setReviewMode] = useState(false);
  const { productId } = useParams();

  // const getProduct = async (id) => {
  //   const { data } = await axios.get(
  //     `${process.env.REACT_APP_PSTM_API}/products/${id}`
  //   );
  //   setProduct(data.products[0]);
  // };

  // useEffect(() => {
  //   getProduct(productId);
  // }, []);

  const products = {
    products: [
      {
        id: 13,
        name: "기모 트레이닝복 상하",
        description: "따듯한 트레이닝 복을 상하 세트로 만나보세요",
        thumbnail:
          "http://img.1300k.com/events/site/2021/11/211108_131283_pc_11_1118.jpg",
      },
    ],
  };
  const product = products.products[0];

  return (
    <>
      <div>
        <img src={product.thumbnail} />
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
