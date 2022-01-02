import React from "react";

import styled from "styled-components";

const Review = ({ review }) => {
  return (
    <>
      <GridDiv>
        <div>
          <Img
            src={
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            }
          />
        </div>
        <div>
          <div>{review.userName}</div>
          <div>{review.description}</div>
        </div>
      </GridDiv>
    </>
  );
};

const GridDiv = styled.div`
  display: grid;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
`;

export default Review;
