import React, { useEffect, useState } from "react";

import Basket from "../components/Basket";
import { getBaskets } from "../service/BasketService";

import styled from "styled-components";

const BasketList = () => {
  const [basketList, setBasketList] = useState([]);

  const fetchBaskets = async () => {
    const data = await getBaskets();
    setBasketList(data);
  };

  useEffect(() => {
    fetchBaskets();
  }, []);

  return (
    <>
      <MainDiv>
        <TitleDiv>장바구니</TitleDiv>
        {basketList.map((product) => (
          <div key={product.id}>
            <Basket product={product}></Basket>
          </div>
        ))}
      </MainDiv>
      <GridDiv>
        <InnerDiv>
          <div>상품 금액({basketList.length}개)</div>
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
