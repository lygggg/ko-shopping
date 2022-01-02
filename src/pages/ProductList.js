import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Product from "./Product";

import styled from "styled-components";

const ProductList = () => {
  // const [productList, setProductList] = useState([]);

  // const getProducts = async () => {
  //   const { data } = await axios.get(
  //     `${process.env.REACT_APP_PSTM_API}/products`
  //   );
  //   console.log(data.products);
  //   setProductList(data.products);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);
  const productList = {
    products: [
      {
        id: 13,
        name: "기모 트레이닝복 상하",
        description: "따듯한 트레이닝 복을 상하 세트로 만나보세요",
        thumbnail:
          "http://img.1300k.com/events/site/2021/11/211108_131283_pc_11_1118.jpg",
      },
      {
        id: 12,
        name: "부드러운 극세사머플러 목도리선물",
        description: "여대생 방한템 부드러운 극세사머플러 목도리선물이에요",
        thumbnail:
          "https://shopping-phinf.pstatic.net/main_2943080/29430808847.20211028014245.jpg?type=f640",
      },
      {
        id: 11,
        name: "자석목도리 머플러 털 페이크",
        description:
          "올 겨울을 따뜻하게 만들어줄 자석 목도리 텊 페이크에요. 목이 따뜻해야 최고",
        thumbnail:
          "https://shopping-phinf.pstatic.net/main_2975800/29758003869.20211120030011.jpg?type=f640",
      },
      {
        id: 10,
        name: "인증샷을 부르는 춘식이 유리컵",
        description:
          "안정감있게 쌓을 수 있는 실용적인 디자인에\n귀여운 춘식이를 더한 , 금주의 추천 선물이에요",
        thumbnail:
          "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg",
      },
      {
        id: 9,
        name: "인증샷을 부르는 춘식이 유리컵",
        description:
          "안정감있게 쌓을 수 있는 실용적인 디자인에\n귀여운 춘식이를 더한 , 금주의 추천 선물이에요",
        thumbnail:
          "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg",
      },
      {
        id: 8,
        name: "인증샷을 부르는 춘식이 유리컵",
        description:
          "안정감있게 쌓을 수 있는 실용적인 디자인에\n귀여운 춘식이를 더한 , 금주의 추천 선물이에요",
        thumbnail:
          "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg",
      },
      {
        id: 7,
        name: "인증샷을 부르는 춘식이 유리컵",
        description:
          "안정감있게 쌓을 수 있는 실용적인 디자인에\n귀여운 춘식이를 더한 , 금주의 추천 선물이에요",
        thumbnail:
          "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg",
      },
      {
        id: 6,
        name: "인증샷을 부르는 춘식이 유리컵",
        description:
          "안정감있게 쌓을 수 있는 실용적인 디자인에\n귀여운 춘식이를 더한 , 금주의 추천 선물이에요",
        thumbnail:
          "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg",
      },
      {
        id: 5,
        name: "인증샷을 부르는 춘식이 유리컵",
        description:
          "안정감있게 쌓을 수 있는 실용적인 디자인에\n귀여운 춘식이를 더한 , 금주의 추천 선물이에요",
        thumbnail:
          "https://cdn.pixabay.com/photo/2021/08/30/21/29/port-6587129_1280.jpg",
      },
    ],
  };

  return (
    <MainDiv>
      <ListDiv>
        {productList.products.map((product) => (
          <div key={product.id}>
            <Product product={product}></Product>
          </div>
        ))}
      </ListDiv>
    </MainDiv>
  );
};

const ListDiv = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-template-rows: 30% 30% 30%;
  justify-content: center;
  grid-row-gap: 30px;
  border: 1px solid #eaeaea;
`;
const MainDiv = styled.div`
  height: 1500px;
`;

export default ProductList;
