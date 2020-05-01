import API from "../../api";

export function setUser() {
  return async function (dispatch) {
    try {
      const response = await API.get("/user");
      const user = response.data;
      dispatch({ type: "SET_USER_SUCCESS", payload: user });
    } catch (err) {
      dispatch({ type: "INTERNAL_ERROR", payload: err });
    }
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
      await API.post("/cart/order");
      const userResponse = await API.get("/user");
      const user = userResponse.data;
      dispatch({ type: "FINALIZE_CART_SUCCESS", payload: user });
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

export function signupUser(firstName, lastName, email, phoneNumber, password) {
  return async function (dispatch) {
    try {
      const response = await API.post("/signup", {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      dispatch({ type: "SIGNUP_SUCCESS" });
    } catch (err) {
      dispatch({ type: "INTERNAL_ERROR", payload: err });
    }
  };
}
