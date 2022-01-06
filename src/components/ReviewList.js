import React, { useState, useEffect } from "react";

import Review from "./Review";
import { getReviews } from "../service/ReviewService";

const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);

  const fetchReviews = async () => {
    const data = await getReviews();
    setReviewList(data);
  };
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div>
      {reviewList.map((review, index) => (
        <div key={index}>
          <Review review={review} />
        </div>
      ))}
    </div>
  );
};

export default ReviewList;
