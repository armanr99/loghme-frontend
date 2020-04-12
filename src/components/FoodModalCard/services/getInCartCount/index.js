export default function getInCartCount(cart, food) {
  const cartItems = cart.items;

  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].food.name === food.name) return cartItems[i].count;
  }

  return 0;
}
