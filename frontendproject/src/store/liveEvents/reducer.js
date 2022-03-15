const initialState = {
  allLiveEvents: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "liveEvents/getAllLiveEvents":
      return {
        // state,
        ...state,
        allLiveEvents: [...action.payload],
      };
    default:
      return state;
  }
};
