import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";
import { Product } from "../../shared/interfaces";

interface State {
  products: Product[];
  totalPrice: number;
  totalItems: number;
}

const initialState: State = {
  products: [],
  totalPrice: 0,
  totalItems: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: action.payload.products,
        totalPrice: state.totalPrice + action.payload.priceToAdd,
        totalItems: state.totalItems + 1
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          (item: Product) => item.id !== action.payload.product.id
        ),
        totalPrice: state.totalPrice - action.payload.priceToRemove,
        totalItems: state.totalItems - action.payload.noOfItems
      };
    default:
      return state;
  }
};

export default cartReducer;
