import { getBaskets as apiGetBaskets } from "../apis/Basket.js";

export const getBaskets = async (ids) => {
  try {
    return await apiGetBaskets(ids);
  } catch (e) {
    alert(e);
  }
};
