import API from "../../api";

export function setUser(user) {
  return {
    type: "SET_USER",
    payload: user,
  };
}

export function addToCart(foodInfo) {
  return async function (dispatch) {
    try {
      const response = await API.post("/cart", foodInfo);
      const cart = response.data;
      dispatch({ type: "ADD_TO_CART_SUCCESS", payload: cart });
    } catch (err) {
      dispatch({ type: "INTERNAL_ERROR", payload: err });
    }
  };
}

export function removeFromCart(foodInfo) {
  return async function (dispatch) {
    try {
      const response = await API.delete("/cart", {
        data: foodInfo,
      });
      const cart = response.data;
      dispatch({ type: "REMOVE_FROM_CART_SUCCESS", payload: cart });
    } catch (err) {
      dispatch({ type: "INTERNAL_ERROR", payload: err });
    }
  };
}

export function finalizeCart() {
  return async function (dispatch) {
    try {
      const response = await API.post("/cart/order");
      const orders = response.data.orders;
      dispatch({ type: "FINALIZE_CART_SUCCESS", payload: orders });
    } catch (err) {
      dispatch({ type: "INTERNAL_ERROR", payload: err });
    }
  };
}

export function chargeWallet(amount) {
  return async function (dispatch) {
    try {
      const response = await API.post("/wallet", { amount });
      const credit = response.data.credit;
      dispatch({ type: "CHARGE_WALLET_SUCCESS", payload: credit });
    } catch (err) {
      dispatch({ type: "INTERNAL_ERROR", payload: err });
    }
  };
}
