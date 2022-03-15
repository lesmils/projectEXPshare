const initialState = {
  allCategories: [],
  oneCategory: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "categories/getAllCategories":
      return {
        ...state,
        allCategories: [...action.payload.categories],
      };

    case "categories/getOneCategory":
      return {
        ...state,
        oneCategory: action.payload,
      };

    default:
      return state;
  }
};
