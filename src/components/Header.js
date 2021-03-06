import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderDiv>
        <HeadDiv>
          <StyledLink to={`/`}>
            <NameDiv>토멘코 쇼핑</NameDiv>
          </StyledLink>
          <StyledLink to={`/basket`}>
            <Img
              src={
                "https://cdn.pixabay.com/photo/2017/03/29/04/09/shopping-icon-2184065_960_720.png"
              }
            />
          </StyledLink>
        </HeadDiv>
      </HeaderDiv>
    </>
  );
};
const Img = styled.img`
  width: 70px;
  height: 70px;
`;
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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

export default Header;
