import React from "react";

const Basket = ({ product }) => {
  return (
    <>
      <div>
        <img src={product.thumbnail} />
        <div>{product.name}</div>
        <div>{product.price}</div>
      </div>
    </>
  );
};

export default Basket;
