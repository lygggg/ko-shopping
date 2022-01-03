import React from "react";

import styled from "styled-components";

const Basket = ({ product }) => {
  return (
    <>
      <GridDiv>
        <div>
          <Img src={product.thumbnail} />
        </div>
        <NameDiv>{product.name}</NameDiv>
        <div></div>
        <PriceDiv>{product.price}원</PriceDiv>
      </GridDiv>
    </>
  );
};

const GridDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 180px 800px;
  grid-column-gap: 100px;
  padding: 30px;
  border: solid 0.2px #eaeaea;
  margin-bottom: 30px;
`;

const NameDiv = styled.div`
  font-size: 30px;
`;

const PriceDiv = styled.div`
  align-items: center;
  font-size: 20px;
  text-align: right;
  font-size: 25px;
`;

const Img = styled.img`
  width: 250px;
  height: 180px;
`;

export default Basket;
