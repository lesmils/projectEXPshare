const initialState = {
  allOnlineEvents: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "onlineEvents/getAllOnlineEvents":
      return {
        ...state,
        allOnlineEvents: [...action.payload],
      };
    default:
      return state;
  }
};
