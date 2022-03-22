import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { selectUser } from "./selectors";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const TOKEN_STILL_VALID = "TOKEN_STILL_VALID";
export const LOG_OUT = "LOG_OUT";

const loginSuccess = (userWithToken) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userWithToken,
  };
};

const tokenStillValid = (userWithoutToken) => ({
  type: TOKEN_STILL_VALID,
  payload: userWithoutToken,
});

export const logOut = () => ({ type: LOG_OUT });

export const signUp = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/signup`, {
        name,
        email,
        password,
      });
      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    // get token from the state
    const token = selectToken(getState());

    // if we have no token, stop
    if (token === null) return;

    dispatch(appLoading());
    try {
      // if we do have a token,
      // check wether it is still valid or if it is expired
      const response = await axios.get(`${apiUrl}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // token is still valid
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      // if we get a 4xx or 5xx response,
      // get rid of the token by logging out
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export function offerPosted(offer) {
  return {
    type: "offers/postOffer",
    payload: offer,
  };
}

export function postOffer(name, description, image, tokenCost, category) {
  return async function thunk(dispatch, getState) {
    try {
      // get token from the state
      const token = selectToken(getState());

      // if we have no token, stop
      if (token === null) return;

      const response = await axios.post(
        `${apiUrl}/offers`,
        {
          name: name,
          description: description,
          imageUrl: image,
          tokenCost: tokenCost,
          categoryId: category,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(offerPosted(response.data));
      //console.log("what is the response", response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function offerDeleted(id) {
  return {
    type: "offers/offerDeleted",
    payload: id,
  };
}

export const deleteOffer = (id) => {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    if (token === null) return;

    try {
      const response = await axios.delete(`${apiUrl}/offers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Offer deleted?", response.data);
      dispatch(offerDeleted(id));
    } catch (e) {
      console.error(e);
    }
  };
};

export const imageUpdated = (data) => ({
  type: "user/updateImage",
  payload: data,
});

export function updateImage(image) {
  console.log("What is image", image);
  return async function thunk(dispatch, getState) {
    const { id, token } = selectUser(getState());
    // console.log("what are id and token", id, token);
    console.log("What is image", image);
    if (token === null) return;

    const response = await axios.patch(
      `${apiUrl}/users/${id}`,
      {
        imageUrl: image,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log("what is response", response.data);

    dispatch(imageUpdated(response.data));
  };
}

export const detailsUpdated = (data) => ({
  type: "user/updateDetails",
  payload: data,
});

export function updateDetails(name, description) {
  return async function thunk(dispatch, getState) {
    const { id, token } = selectUser(getState());

    console.log("What is description", description);
    if (token === null) return;

    const response = await axios.patch(
      `${apiUrl}/users/${id}/details`,
      {
        description: description,
        name: name,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    console.log("what is response", response.data);

    dispatch(detailsUpdated(response.data));
  };
}

export function liveEventPosted(liveEvent) {
  return {
    type: "liveEvents/postLiveEvent",
    payload: liveEvent,
  };
}

export function postLiveEvent(
  name,
  time,
  durationHours,
  description,
  location,
  image,
  tokenCost,
  category,
  maxParticipants
) {
  return async function thunk(dispatch, getState) {
    try {
      // get token from the state
      const token = selectToken(getState());

      // if we have no token, stop
      if (token === null) return;

      const response = await axios.post(
        `${apiUrl}/liveevents`,
        {
          name: name,
          time: time,
          durationHours: durationHours,
          description: description,
          location: location,
          imageUrl: image,
          tokenCost: tokenCost,
          categoryId: category,
          maxParticipants: maxParticipants,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(liveEventPosted(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function liveEventDeleted(id) {
  return {
    type: "liveEvents/liveEventsDeleted",
    payload: id,
  };
}

export function deleteLiveEvent(id) {
  return async (dispatch, getState) => {
    const { token } = selectUser(getState());
    if (token === null) return;

    try {
      const response = await axios.delete(`${apiUrl}/liveevents/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("LiveEvent deleted?", response.data);
      dispatch(liveEventDeleted(id));
    } catch (e) {
      console.error(e);
    }
  };
}

export function skillTagPosted(skillTag) {
  return {
    type: "skillTags/postSkillTag",
    payload: skillTag,
  };
}

export function postSkillTag(skillTag) {
  return async function thunk(dispatch, getState) {
    try {
      const token = selectToken(getState());
      if (token === null) return;

      const response = await axios.post(
        `${apiUrl}/skilltags`,
        {
          name: skillTag,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(skillTagPosted(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}
