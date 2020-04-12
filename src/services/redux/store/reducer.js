const initialState = {
        user: {
        id: 0,
        credit: 0,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        orders: [],
        cart: { items: [], totalPrice: 0 },
      },
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
