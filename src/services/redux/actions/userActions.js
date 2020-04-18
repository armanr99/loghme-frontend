import API from "../../api";

export function setUser(user) {
  return {
    type: "SET_USER",
    payload: user
  }
}

export function addToCart(foodInfo) {
  return async function(dispatch) {
    try {
      const response = await API.post("/cart", foodInfo);
      const cart = response.data;
      dispatch({type: "ADD_TO_CART_SUCCESS", payload: cart});
    } catch (err) {
      dispatch({type: "ADD_TO_CART_ERROR", payload: err});
    }
  }
}