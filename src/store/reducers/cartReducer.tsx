import { ADD_TO_CART } from "../actions/types";
import { Product } from "../../shared/interfaces";

interface State {
  products: Product[];
}

const initialState: State = {
  products: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: action.payload.products
      };
    default:
      return state;
  }
};

export default cartReducer;
