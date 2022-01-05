import { getReviews as apiGetReviews } from "../apis/review";

export const getReviews = async () => {
  try {
    return await apiGetReviews();
  } catch (e) {
    alert(e);
  }
};
