const basketStore = {
  baskets: [
    {
      id: 13,
      name: "기모 트레이닝복 상하",
      description: "따듯한 트레이닝 복을 상하 세트로 만나보세요",
      thumbnail:
        "https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872191_960_720.jpg",
      price: 12000,
    },
    {
      id: 12,
      name: "부드러운 극세사머플러 목도리선물",
      description: "여대생 방한템 부드러운 극세사머플러 목도리선물이에요",
      thumbnail:
        "https://cdn.pixabay.com/photo/2016/11/30/08/46/living-room-1872191_960_720.jpg",
      price: 12000,
    },
  ],

  getBaskets() {
    return this.baskets;
  },
};

export default basketStore;
