import React from "react";

import Basket from "./Basket";

import styled from "styled-components";

const BasketList = () => {
  const basketList = {
    products: [
      {
        id: 13,
        name: "기모 트레이닝복 상하",
        description: "따듯한 트레이닝 복을 상하 세트로 만나보세요",
        thumbnail:
          "https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872191_960_720.jpg",
        price: 12000,
      },
      {
        id: 12,
        name: "부드러운 극세사머플러 목도리선물",
        description: "여대생 방한템 부드러운 극세사머플러 목도리선물이에요",
        thumbnail:
          "https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872191_960_720.jpg",
        price: 12000,
      },
    ],
  };
  return (
    <>
      <MainDiv>
        <TitleDiv>장바구니</TitleDiv>
        {basketList.products.map((product) => (
          <div key={product.id}>
            <Basket product={product}></Basket>
          </div>
        ))}
      </MainDiv>
      <GridDiv>
        <InnerDiv>
          <div>상품 금액({basketList.products.length}개)</div>
          <div>500000원</div>
        </InnerDiv>
        <InnerDiv>
          <div>배송비</div>
          <div>2500원</div>
        </InnerDiv>
        <InnerDiv>
          <div>총 주문금액</div>
          <div>149000원</div>
        </InnerDiv>
      </GridDiv>
      <OrderDiv>주문하기</OrderDiv>
    </>
  );
};

const OrderDiv = styled.div`
  width: 100%;
  height: 80px;
  background: #86e57f;
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
`;

const InnerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
`;
const GridDiv = styled.div`
  display: grid;
  grid-template-rows: 30px 30px 30px;
`;

const TitleDiv = styled.div`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin: 40px;
`;
const MainDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column; /*수직 정렬*/
`;
export default BasketList;
