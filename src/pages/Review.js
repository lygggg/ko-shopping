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
          <NameDiv>{review.userName}</NameDiv>
          <DescriptionDiv>{review.description}</DescriptionDiv>
        </div>
      </GridDiv>
    </>
  );
};

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 80px 200px;
  grid-gap: 30px;
  padding: 30px;
  border: solid 0.2px #eaeaea;
  margin-bottom: 30px;
`;

const NameDiv = styled.div`
  font-size: 30px;
`;

const DescriptionDiv = styled.div`
  font-size: 20px;
`;

const Img = styled.img`
  width: 80px;
  height: 80px;
`;

export default Review;
