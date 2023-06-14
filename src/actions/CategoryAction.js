import axios from "axios";
import { BASE_URL } from "../constants/UserConstant";

export const getListCategoryAction = (category) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/category`);
    dispatch({ type: "LIST_CATEGORY", payload: data });
  } catch (error) {
    dispatch({ type: "GET_ALL_PRODUCT_FAIL", payload: error.message });
  }
};
