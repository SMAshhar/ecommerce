import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  product: string;
  price: number;
  quantity: number;
  size: string;
}

const initialState: ProductState[] = [];

// product: item._id,
//         price: item.price,
//         quantity: qty,
//         size: size

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    product: (state, actions: PayloadAction<any>) => {
      const newProduct = {
        product: actions.payload.product,
        price: actions.payload.price,
        quantity: actions.payload.quantity,
        size: actions.payload.size, 
      };
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.push(newProduct)
    },

    deleteProduct: (state, actions:PayloadAction<any>) => {
      for (let i=0; i<=state.length; i++) {
        if (state[i] == actions.payload) {
          state.splice(state.indexOf(actions.payload), 1)
        }
      }
    },

    clearCart: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const productActions = productSlice.actions;

export default productSlice.reducer;
