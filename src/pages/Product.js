import React from "react";

import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <>
      <DivGrid>
        <Img src={product.thumbnail} />
        <DivName>{product.name}</DivName>
        <DivDes>{product.description}</DivDes>
      </DivGrid>
    </>
  );
};

const Img = styled.img`
  width: 100%;
  height: 260px;
`;

const DivName = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`;

const DivDes = styled.div`
  font-size: 15px;
`;

const DivGrid = styled.div`
  margin: 20px;
  margin-top: 40px;
`;

export default Product;
