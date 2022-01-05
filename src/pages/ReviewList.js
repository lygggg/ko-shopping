import React, { useState, useEffect } from "react";

import Review from "./Review";
import reviewStore from "../stores/reviewStore";

const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);

  const getReviewList = () => {
    const data = reviewStore.getReviews();
    setReviewList(data);
  };
  useEffect(() => {
    getReviewList();
  }, []);

  return (
    <div>
      {reviewList.map((review) => (
        <div key={review.userId}>
          <Review review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
