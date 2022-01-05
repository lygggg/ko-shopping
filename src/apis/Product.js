import productStore from "../stores/productStore";

export const getProducts = () => {
  const data = productStore.getProducts();
  return data;
};

export const getProduct = (id) => {
  const data = productStore.getProduct(id);
  return data;
};
