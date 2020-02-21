import { Product } from "../../shared/interfaces";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (product: Product) => (dispatch, getState) => {
  const cartProducts: Product[] = getState().cart.products;
  let productAlreadyInCart = false;

  cartProducts.forEach(item => {
    if (item.id === product.id) {
      productAlreadyInCart = true;
      item.count++;
    }
  });

  if (!productAlreadyInCart) {
    cartProducts.push({ ...product, count: 1 });
  }
  return dispatch({
    type: ADD_TO_CART,
    payload: { products: cartProducts, priceToAdd: Number(product.price) }
  });
};

export const removeFromCart = (product: Product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product,
      priceToRemove: Number(product.price * product.count),
      noOfItems: product.count
    }
  };
};
