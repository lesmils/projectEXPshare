import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";

export function requestPosted(request) {
  return {
    type: "requests/postRequest",
    payload: request,
  };
}

export function postRequest(message, offerId, sellerId) {
  return async function thunk(dispatch, getState) {
    try {
      const token = selectToken(getState());

      if (token === null) return;

      const response = await axios.post(
        `${apiUrl}/requests`,
        {
          message: message,
          offerId: offerId,
          sellerId: sellerId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
}
