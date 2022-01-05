import basketStore from "../stores/basketStore";

export const getBaskets = () => {
  const data = basketStore.getBaskets();
  return data;
};
