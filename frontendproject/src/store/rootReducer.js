import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import categories from "./categories/reducer";
import profile from "./profile/reducer";
import liveEvents from "./liveEvents/reducer";
export default combineReducers({
  appState,
  user,
  categories,
  profile,
  liveEvents,
});
