import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Product = ({ product }) => {
  return (
    <>
      <StyledLink to={`/products/${product.id}`}>
        <DivGrid>
          <Img src={product.thumbnail} />
          <DivName>{product.name}</DivName>
          <DivDes>{product.description}</DivDes>
        </DivGrid>
      </StyledLink>
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
  width: 300px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

export default Product;
