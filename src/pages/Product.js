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
