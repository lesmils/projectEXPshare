const initialState = {
  allOnlineEvents: [],
  oneOnlineEvent: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "onlineEvents/getAllOnlineEvents":
      return {
        ...state,
        allOnlineEvents: [...action.payload],
      };

    case "onlineEvents/getOneOnlineEvent":
      return {
        ...state,
        oneOnlineEvent: { ...state.oneOnlineEvent, ...action.payload },
      };

    default:
      return state;
  }
};
