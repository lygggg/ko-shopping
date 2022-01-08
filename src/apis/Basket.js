import productStore from "../stores/productStore";

export const getBaskets = (ids) => {
  const data = productStore.getBaskets(ids);
  return data;
};
