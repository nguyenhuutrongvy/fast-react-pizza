import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { createAppSelector } from "../../hooks";
import { CartItemType } from "../../types/CartItem";

interface CartState {
  cart: CartItemType[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItemType>) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item !== undefined) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item !== undefined) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;

        if (item.quantity === 0) {
          cartSlice.caseReducers.deleteItem(state, action);
        }
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// Using Reselect

// export const getCart = (state: RootState) => state.cart.cart;
export const getCart = createAppSelector(
  [(state) => state.cart],
  (cart) => cart.cart,
);

/* export const getTotalCartQuantity = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0); */
export const getTotalCartQuantity = createAppSelector(
  [(state) => state.cart],
  (cart) => cart.cart.reduce((sum, item) => sum + item.quantity, 0),
);

/* export const getTotalCartPrice = (state: RootState) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0); */
export const getTotalCartPrice = createAppSelector(
  [(state) => state.cart],
  (cart) => cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
);

/* export const getCurrentQuantityById = (id: number) => {
  return (state: RootState) =>
    state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
}; */
export const getCurrentQuantityById = (id: number) => {
  return createAppSelector(
    [(state) => state.cart],
    (cart) => cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0,
  );
};

export default cartSlice.reducer;
