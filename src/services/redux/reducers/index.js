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
  redirect: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER_SUCCESS": {
      return { ...state, user: action.payload };
    }
    case "ADD_TO_CART_SUCCESS": {
      toast.success(success.ADD_TO_CART);
      return { ...state, user: { ...state.user, cart: action.payload } };
    }
    case "REMOVE_FROM_CART_SUCCESS": {
      toast.success(success.REMOVE_FROM_CART);
      return { ...state, user: { ...state.user, cart: action.payload } };
    }
    case "CHARGE_WALLET_SUCCESS": {
      toast.success(success.CHARGE);
      return { ...state, user: { ...state.user, credit: action.payload } };
    }
    case "SIGNUP_SUCCESS": {
      toast.success(success.SIGNUP);
      return { ...state, redirect: true };
    }
    case "LOGIN_SUCCESS": {
      toast.success(success.LOGIN);
      return { ...state, redirect: true };
    }
    case "FINALIZE_CART_SUCCESS": {
      toast.success(success.FINALIZE_ORDER);
      return { ...state, user: action.payload };
    }
    case "INTERNAL_ERROR": {
      toast.error(error.INTERNAL);
      return state;
    }
    default: {
      return state;
    }
  }
}
