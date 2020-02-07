import { products } from "../../constants/Data";

interface State {}

const initialState: State = products;

const productsReducer = (state = initialState) => {
  return state;
};

export default productsReducer;
