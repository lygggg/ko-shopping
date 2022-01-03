import React from "react";

import Basket from "./Basket";

const BasketList = () => {
  const basketList = {
    products: [
      {
        id: 13,
        name: "기모 트레이닝복 상하",
        description: "따듯한 트레이닝 복을 상하 세트로 만나보세요",
        thumbnail:
          "http://img.1300k.com/events/site/2021/11/211108_131283_pc_11_1118.jpg",
        price: 13000,
      },
      {
        id: 12,
        name: "부드러운 극세사머플러 목도리선물",
        description: "여대생 방한템 부드러운 극세사머플러 목도리선물이에요",
        thumbnail:
          "https://shopping-phinf.pstatic.net/main_2943080/29430808847.20211028014245.jpg?type=f640",
        price: 13000,
      },
    ],
  };

  return (
    <>
      <div>
        {basketList.products.map((product) => (
          <div key={product.id}>
            <Basket product={product}></Basket>
          </div>
        ))}
      </div>
    </>
  );
};

export default BasketList;
