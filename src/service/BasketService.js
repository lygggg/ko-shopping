import { getBaskets as apiGetBaskets } from "../apis/Basket.js";

export const getBaskets = async () => {
  try {
    return await apiGetBaskets();
  } catch (e) {
    alert(e);
  }
};
