const storedCart = JSON.parse(localStorage.getItem("cart"));

const INITIAL_STATE = {
  cart: storedCart || [],
  total: 0,
};

const getTotalPrice = (cart) => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDITEM":
      const indexItemAdd = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );

      if (indexItemAdd !== -1) {
        const updatedQuantity = {
          ...state.cart[indexItemAdd],
          quantity: state.cart[indexItemAdd].quantity + action.payload.quantity,
        };
        const newArr = [...state.cart];
        newArr.splice(indexItemAdd, 1, updatedQuantity);
        return {
          cart: newArr,
          total: getTotalPrice(newArr),
        };
      } else {
        const newArr = [...state.cart];
        newArr.push(action.payload);
        return {
          cart: newArr,
          total: getTotalPrice(newArr),
        };
      }

    case "UPDATEITEM":
      const indexItemUpdate = state.cart.findIndex(
        (obj) => obj.id === action.payload.id
      );
      const newArrUpdate = [...state.cart];
      if (action.payload.quantity === 0) {
        newArrUpdate.splice(indexItemUpdate, 1);
      } else {
        newArrUpdate.splice(indexItemUpdate, 1, action.payload);
      }
      return {
        cart: newArrUpdate,
        total: getTotalPrice(newArrUpdate),
      };

      case "REMOVEITEM":
        const indexItemRemove = state.cart.findIndex(
          (obj) => obj.id === action.payload.id
        );
        const newArrRemove = [...state.cart];
        newArrRemove.splice(indexItemRemove, 1);
        return {
          cart: newArrRemove,
          total: getTotalPrice(newArrRemove),
        };
      

    default:
      return state;
  }
}
