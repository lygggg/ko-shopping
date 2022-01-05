import {
  getProduct as apiGetProduct,
  getProducts as apiGetProducts,
} from "../apis/Product";

export const getProducts = async () => {
  try {
    return await apiGetProducts();
  } catch (e) {
    alert(e);
  }
};

export const getProduct = async (id) => {
  try {
    return await apiGetProduct(id);
  } catch (e) {
    alert(e);
  }
};
