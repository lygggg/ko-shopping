import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_PSTM_API}/products`
    );
    setProductList(data.products);
    console.log(productList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
