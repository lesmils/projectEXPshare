import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import categories from "./categories/reducer";
import profile from "./profile/reducer";
import liveEvents from "./liveEvents/reducer";
import onlineEvents from "./onlineEvents/reducer";
import requests from "./requests/reducer";
export default combineReducers({
  appState,
  user,
  categories,
  profile,
  liveEvents,
  onlineEvents,
  requests,
});
