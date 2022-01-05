import reviewStore from "../stores/reviewStore";

export const getReviews = () => {
  const data = reviewStore.getReviews();
  return data;
};
