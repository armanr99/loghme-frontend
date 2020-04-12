const initialState = {
  user: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.user,
      };
    default:
      return state;
  }
}
