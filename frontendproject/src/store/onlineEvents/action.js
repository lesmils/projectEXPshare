import axios from "axios";
import { apiUrl } from "../../config/constants";

export function OnlineEventsFetched(events) {
  console.log("events?", events);
  return {
    type: "onlineEvents/getAllOnlineEvents",
    payload: events,
  };
}

export const fetchOnlineEvents = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/onlineevents`);

      dispatch(OnlineEventsFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
