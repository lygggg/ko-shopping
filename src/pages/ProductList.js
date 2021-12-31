import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Product from "./Product";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_PSTM_API}/products`
    );
    setProductList(data.products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>
          <Product product={product}></Product>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
