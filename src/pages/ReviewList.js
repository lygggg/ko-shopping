import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Review from "./Review";

import styled from "styled-components";

const ReviewList = () => {
  // const [reviewList, setReviewList] = useState();
  // const { productId } = useParams();

  // const getReviewList = async (id) => {
  //   const { data } = await axios.get(
  //     `${process.env.REACT_APP_PSTM_API}/reviews/${id}`
  //   );
  //   setReviewList(data.reviews);
  // };
  // useEffect(() => {
  //   getReviewList(productId);
  // }, []);
  const reviewList = {
    reviews: [
      {
        userid: "12312",
        userName: "손오공",
        description: "맛있네 추천",
      },
      {
        userid: "312312",
        userName: "원빈",
        description: "맛없네 비추천",
      },
      {
        userid: "41241232",
        userName: "강호동",
        description: "따듯하네",
      },
      {
        userid: "312321",
        userName: "박명수",
        description: "아 배고프다",
      },
    ],
  };

  return (
    <div>
      {console.log(reviewList)}
      {reviewList.map((review) => (
        <div key={review.id}>
          <Review review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
