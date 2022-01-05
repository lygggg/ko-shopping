const reviewStore = {
  reviews: [
    {
      userId: "12312",
      userName: "손오공",
      description: "맛있네 추천",
    },
    {
      userId: "312312",
      userName: "원빈",
      description: "맛없네 비추천",
    },
    {
      userId: "41241232",
      userName: "강호동",
      description: "따듯하네",
    },
    {
      userId: "312321",
      userName: "박명수",
      description: "아 배고프다",
    },
  ],

  getReviews() {
    return this.reviews;
  },
};

export default reviewStore;
