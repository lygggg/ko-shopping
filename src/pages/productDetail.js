import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  return <div>{productId + "해당 id출력"}</div>;
};

export default ProductDetail;
