export const initialState = {
  basket: [],
  user: null,
};

export const getBasketSum = (basket) =>
  basket?.reduce((total, item) => total + item.price, 0);
function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      console.log(action.user);
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      //logika
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      //logika
      let newBasket = [...state.basket];
      let index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Cannot remove ${action.id} from basket`);
      }
      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
}

export default reducer;
