import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <HeadDiv>
          <NameDiv>토멘코 쇼핑</NameDiv>
          <div>장바구니</div>
        </HeadDiv>
      </HeaderDiv>
    </>
  );
};
const NameDiv = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const HeaderDiv = styled.header`
  width: 100%;
  height: 70px;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
`;

const HeadDiv = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
