import axios from "axios";
import { BASE_URL } from "../constants/UserConstant";

export const getDashboardAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/dashboard`);
    dispatch({ type: "GET_DASHBOARD", payload: data });
  } catch (error) {
    dispatch({ type: "GET_DASHBOARD_FAIL", payload: error.message });
  }
};
