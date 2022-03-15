/* eslint-disable import/no-anonymous-default-export */
import { LOG_OUT, LOGIN_SUCCESS, TOKEN_STILL_VALID } from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };

    case LOG_OUT:
      localStorage.removeItem("token");
      return { ...initialState, token: null };

    case TOKEN_STILL_VALID:
      return { ...state, ...action.payload };

    case "offers/postOffer":
      return {
        ...state,
        offers: [...state.offers, action.payload],
      };

    case "offers/offerDeleted":
      const offerId = action.payload;
      const newOffer = state.offers.filter((offer) => offer.id !== offerId);
      return {
        ...state,
        offers: newOffer,
      };

    case "user/updateImage":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
