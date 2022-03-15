import axios from "axios";
import { apiUrl } from "../../config/constants";

export function categoriesFetched(categories) {
  return {
    type: "categories/getAllCategories",
    payload: categories,
  };
}

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/categories`);

      dispatch(categoriesFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};

export function oneCategoryFetched(category) {
  return {
    type: "categories/getOneCategory",
    payload: category,
  };
}

export const fetchUsersOneCategory = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/categories/${id}`);

      dispatch(oneCategoryFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
