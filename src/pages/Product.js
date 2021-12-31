import React from "react";

import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <>
      <DivFlex>
        <DivGrid>
          <Img src={product.thumbnail} />
          <DivName>{product.name}</DivName>
          <DivDes>{product.description}</DivDes>
        </DivGrid>
      </DivFlex>
    </>
  );
};

const Img = styled.img`
  width: 35%;
  height: 80%;
  @media screen and (max-width: 1060px) {
    width: 70%;
  }
  @media screen and (max-width: 768px) {
    width: 40%;
  }
  @media screen and (max-width: 548px) {
    width: 20%;
  }
`;

const DivFlex = styled.div``;

const DivName = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-align: left;
`;

const DivDes = styled.div`
  font-size: 15px;
`;

const DivGrid = styled.div``;

export default Product;
