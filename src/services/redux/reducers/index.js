import { toast } from "react-toastify";
import { error, success } from "../../toastify/configs";

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
    case "SET_USER": {
      return { ...state, user: action.payload };
    }
    case "ADD_TO_CART_SUCCESS": {
      toast.success(success.ADD_TO_CART);
      return { user: { ...state.user, cart: action.payload } };
    }
    case "ADD_TO_CART_ERROR": {
      toast.error(error.INTERNAL);
      return state;
    }
    default: {
      return state;
    }
  }
}
