import axios from "axios";
import { apiUrl } from "../../config/constants";

export function LiveEventsFetched(events) {
  return {
    type: "liveEvents/getAllLiveEvents",
    payload: events,
  };
}

export const fetchLiveEvents = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/liveevents`);

      dispatch(LiveEventsFetched(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };
};
